// This route must be server-rendered to handle the Prismic preview token redirect.
// With output: 'static', this route opts into server rendering via Vercel
// serverless functions through the @astrojs/vercel adapter.
export const prerender = false;

import type { APIRoute } from 'astro';
import { linkResolver } from '@/lib/linkResolver';
import { createClient } from '@/prismicio/client';

export const GET: APIRoute = async ({ request }) => {
  const { searchParams, origin } = new URL(request.url);
  const previewToken = searchParams.get('token') ?? undefined;
  const documentID = searchParams.get('documentId') ?? undefined;

  const client = createClient();
  const previewURL = await client.resolvePreviewURL({
    linkResolver,
    defaultURL: '/',
    previewToken,
    documentID,
  });

  return Response.redirect(new URL(previewURL, origin).href, 307);
};
