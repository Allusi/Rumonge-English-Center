
"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface AudioCacheContextType {
  getAudioForText: (text: string) => Promise<string>;
}

const AudioCacheContext = createContext<AudioCacheContextType | undefined>(undefined);

export function AudioCacheProvider({ children }: { children: ReactNode }) {
  const [audioCache, setAudioCache] = useState<Map<string, string>>(new Map());

  const getAudioForText = useCallback(async (text: string): Promise<string> => {
    if (audioCache.has(text)) {
      return audioCache.get(text)!;
    }
    try {
      const resp = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err?.error || 'TTS request failed');
      }

      const data = await resp.json();
      const media = data.media;
      setAudioCache(prevCache => {
        const newCache = new Map(prevCache);
        newCache.set(text, media);
        return newCache;
      });
      return media;
    } catch (error) {
      console.error("Failed to get audio for text:", error);
      throw error;
    }
  }, [audioCache]);

  return (
    <AudioCacheContext.Provider value={{ getAudioForText }}>
      {children}
    </AudioCacheContext.Provider>
  );
}

export function useAudioCache() {
  const context = useContext(AudioCacheContext);
  if (context === undefined) {
    throw new Error('useAudioCache must be used within an AudioCacheProvider');
  }
  return context;
}
