import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  let slug = searchParams.get('slug');
  return new Response(`Previewing ${slug}`, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
