import type { LinkResolverFunction } from '@prismicio/client';
import * as prismic from '@prismicio/client';

export const linkResolver: LinkResolverFunction = (doc) => {
  switch (doc.type) {
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
      return `/work/${doc.uid}`;
    case 'insight':
      return `/insights/${doc.uid}`;
    default:
      return '/';
  }
};

export const getPrismicLink = (
  link?: Parameters<typeof prismic.asLink>[0] | null,
) => (link ? (prismic.asLink(link, { linkResolver }) ?? null) : null);
