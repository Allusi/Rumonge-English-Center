// The Genkit dynamic API route is unused in this build; export a stub handler
// so TypeScript and Next's route type generation treat this file as a module.
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
	return new Response('Not Found', { status: 404 });
}

export async function POST(req: NextRequest) {
	return new Response('Not Found', { status: 404 });
}
