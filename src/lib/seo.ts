const SITE_URL = 'https://portfolio.farrel.tech';
const DEFAULT_SITE_NAME = 'Farrel';

export function buildTitle(
  pageTitle: string,
  siteName = DEFAULT_SITE_NAME,
): string {
  if (!pageTitle) return siteName;
  return `${pageTitle} • ${siteName}`;
}

export function buildCanonical(pathname: string): string {
  // Strip trailing slash except for root
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  return `${SITE_URL}${path}`;
}

export function buildDescription(
  pageDescription: string | null | undefined,
  siteDescription: string | null | undefined,
): string {
  return pageDescription ?? siteDescription ?? '';
}

export function buildPersonJsonLd(params: {
  name: string;
  jobTitle: string;
  linkedinUrl?: string | null;
  githubUrl?: string | null;
}): Record<string, unknown> {
  const sameAs = [params.linkedinUrl, params.githubUrl].filter(
    (url): url is string => typeof url === 'string' && url.length > 0,
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: params.name,
    url: SITE_URL,
    jobTitle: params.jobTitle,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildArticleJsonLd(params: {
  headline: string;
  datePublished: string;
  authorName: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    datePublished: params.datePublished,
    author: {
      '@type': 'Person',
      name: params.authorName,
    },
  };
}
