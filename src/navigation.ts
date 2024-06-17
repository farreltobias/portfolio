import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

import { localePrefix, locales, pathnames } from './locale-config'

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  })
