
'use client';

import { useEffect, useRef } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import type { Notification as NotificationData } from '@/lib/data';

export function NotificationPermissionRequester() {
  const { user } = useUser();
  const firestore = useFirestore();
  const initialLoadHandled = useRef(false);

  useEffect(() => {
    if (!user || !firestore) return;
    if (!('Notification' in window)) {
        // Browser doesn't support the Notification API — log at debug level
        console.debug("Notification API not supported in this browser");
        return;
    }

    const requestPermissionAndListen = async () => {
        let permission = Notification.permission;
        
        if (permission === 'default') {
            permission = await Notification.requestPermission();
        }

        if (permission === 'granted') {
             const notificationsQuery = query(
                collection(firestore, 'notifications'), 
                where('userId', '==', user.uid)
            );

            const unsubscribe = onSnapshot(notificationsQuery, (snapshot) => {
                 if (!initialLoadHandled.current) {
                    initialLoadHandled.current = true;
                    return;
                }

                 if (snapshot.metadata.hasPendingWrites) {
                    return; // Ignore local changes
                }

                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        const newNotification = change.doc.data() as NotificationData;
                        
                        if(newNotification.isRead) return;

                        if (navigator.serviceWorker && 'showNotification' in ServiceWorkerRegistration.prototype) {
                           navigator.serviceWorker.ready.then(registration => {
                             registration.showNotification('REC Online', {
                               body: newNotification.message,
                               icon: '/icon-192x192.png',
                               badge: '/icon-192x192.png',
                               data: { url: newNotification.link }
                             });
                           });
                        } else {
                            new Notification('REC Online', {
                                body: newNotification.message,
                                icon: '/icon-192x192.png'
                            });
                        }
                    }
                });
            }, (error) => {
                console.error("Error listening for notifications: ", error);
            });

            const handleNotificationClick = (event: any) => {
                const url = event.notification.data?.url;
                if (url) {
                    // `clients` is available in service worker global scope; cast to any to avoid TS error.
                    try {
                        (globalThis as any).clients?.openWindow?.(url) ?? window.open(url);
                    } catch (e) {
                        // Fallback
                        window.open(url);
                    }
                }
                event.notification.close();
            };

            navigator.serviceWorker.ready.then(registration => {
               registration.addEventListener('notificationclick', handleNotificationClick);
            });

            return () => {
                unsubscribe();
                navigator.serviceWorker.ready.then(registration => {
                    registration.removeEventListener('notificationclick', handleNotificationClick);
                });
            };
        } else if (permission === 'denied') {
            // Permission denied — use debug-level log to avoid polluting production logs
            console.debug('Notification permission denied.');
        }
    }

    requestPermissionAndListen();
    
    return () => {
      initialLoadHandled.current = false;
    };

  }, [user, firestore]);

  return null;
}
