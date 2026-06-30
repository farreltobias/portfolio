// This route must be server-rendered to handle the Prismic preview token redirect.
// With output: 'static', this route opts into server rendering via Vercel
// serverless functions through the @astrojs/vercel adapter.
export const prerender = false;

import type { APIRoute } from 'astro';
import { createClient } from '@/prismicio/client';

/**
 * Link resolver — maps Prismic document types to URL paths.
 * Must match the route resolver in src/prismicio/client.ts.
 */
const linkResolver = (document: { type: string; uid?: string }): string => {
  switch (document.type) {
    case 'home':
      return '/';
    case 'work':
      return '/work';
    case 'about':
      return '/about';
    case 'insights_page':
      return '/insights';
    case 'contact':
      return '/contact';
    case 'case_study':
      return `/work/${document.uid}`;
    case 'insight':
      return `/insights/${document.uid}`;
    default:
      return '/';
  }
};

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
