import * as prismic from '@prismicio/client';

const repositoryName = import.meta.env.PRISMIC_ENVIRONMENT as string;

if (!repositoryName) {
  throw new Error(
    '[Prismic] PRISMIC_ENVIRONMENT is not set. Add it to your .env file — see .env.example.',
  );
}

export { repositoryName };

// Route resolver — maps document types to URL paths for asLink() and preview redirect.
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
    accessToken: import.meta.env.PRISMIC_ACCESS_TOKEN as string | undefined,
    ...config,
  });
