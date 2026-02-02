
'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  onSnapshot,
  query,
  collection,
  type Firestore,
  type CollectionReference,
  type DocumentData,
  type Query,
  queryEqual,
} from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';

interface UseCollectionOptions<T> {
  initialData?: T[];
}

export function useCollection<T extends DocumentData>(
  ref: Query | CollectionReference | null,
  options?: UseCollectionOptions<T>
) {
  const [data, setData] = useState<T[] | null>(options?.initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!ref) {
      setLoading(false);
      setData(null);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const result: T[] = [];
        snapshot.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() } as unknown as T);
        });
        setData(result);
        setLoading(false);
        setError(null);
      },
      (err: any) => {
        // Only emit a specific permission error if the code matches.
        if (err.code === 'permission-denied') {
            let path = 'unknown';
             if (ref) {
                if ('path' in ref) {
                    path = ref.path;
                } else {
                     try {
                         const tempColl = collection(ref.firestore, (ref as any)._query.path.segments.join('/'));
                         path = tempColl.path;
                     } catch(e) {
                        console.error("Could not determine path from query", e);
                     }
                }
            }
            const permissionError = new FirestorePermissionError({
              path: path,
              operation: 'list',
            } satisfies SecurityRuleContext);
            errorEmitter.emit('permission-error', permissionError);
        } else {
            // For all other errors, throw them to see the real cause.
            throw err;
        }
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [ref ? queryEqual(ref, ref) : ref]);

  return { data, loading, error };
}
