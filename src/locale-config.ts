import { Pathnames } from 'next-intl/navigation'

export const port = process.env.PORT || 3000
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`

export const locales = ['en-us', 'pt-br'] as const
export const defaultLocale = locales[0]

export const pathnames = {
  '/': '/',
  '/projects': {
    'en-us': '/projects',
    'pt-br': '/projetos',
  },
  '/projects/[uid]': {
    'en-us': '/projects/[uid]',
    'pt-br': '/projetos/[uid]',
  },
} satisfies Pathnames<typeof locales>

export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
