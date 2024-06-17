import { MetadataRoute } from 'next'

import { defaultLocale, host, locales, pathnames } from '@/src/locale-config'
import { getPathname } from '@/src/navigation'

import { createClient } from '@/prismicio'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient()

  const projects = await client.getAllByType('project', {
    fetch: 'project.none',
    lang: '*',
  })

  const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>

  const routes = keys.reduce(
    (acc: Array<{ key: keyof typeof pathnames; uid?: string }>, key) => {
      if (key === '/projects/[uid]') {
        const pathnames = projects
          .filter(({ lang }) => lang === defaultLocale)
          .map(({ uid }) => ({ key, uid }))

        return [...acc, ...pathnames]
      }

      return [...acc, { key }]
    },
    [],
  )

  function getUrl(
    key: keyof typeof pathnames,
    locale: (typeof locales)[number],
    uid = '',
  ) {
    const pathname = getPathname({
      locale,
      href: { pathname: key, params: { uid } },
    })
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`
  }

  return routes.map(({ key, uid }) => ({
    url: getUrl(key, defaultLocale, uid),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(key, locale, uid)]),
      ),
    },
  }))
}
