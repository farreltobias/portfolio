import * as prismic from '@prismicio/client';

export const repositoryName = import.meta.env.PRISMIC_ENVIRONMENT as string;

/**
 * Route resolver — maps Prismic document types to URL paths.
 * Used by PrismicLink and isFilled.link helpers to resolve internal links.
 */
const routes: prismic.ClientConfig['routes'] = [
  { type: 'home', path: '/' },
  { type: 'work', path: '/work' },
  { type: 'about', path: '/about' },
  { type: 'insights_page', path: '/insights' },
  { type: 'contact', path: '/contact' },
  { type: 'case_study', path: '/work/:uid' },
  { type: 'insight', path: '/insights/:uid' },
];

export const createClient = (config: prismic.ClientConfig = {}) =>
  prismic.createClient(repositoryName, {
    routes,
    ...config,
  });
