import createMiddleware from 'next-intl/middleware'

import {
  defaultLocale,
  localePrefix,
  locales,
  pathnames,
} from './locale-config'

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
})

export const config = {
  matcher: [
    '/',
    '/(en-us|pt-br)/:path*',
    '/((?!_next|_vercel|slice-simulator|api/|email|opengraph-image|.*\\..*).*)',
  ],
}
