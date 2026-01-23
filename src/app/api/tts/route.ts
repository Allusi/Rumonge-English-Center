import { NextResponse } from 'next/server';
import { textToSpeech } from '@/ai/flows/tts-flow';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text } = body;
    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Missing text in request body' }, { status: 400 });
    }

    const result = await textToSpeech(text);
    return NextResponse.json(result);
  } catch (err: any) {
    console.error('TTS route error:', err);
    return NextResponse.json({ error: err?.message || 'TTS error' }, { status: 500 });
  }
}
