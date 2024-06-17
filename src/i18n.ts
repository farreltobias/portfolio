import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { locales } from './locale-config'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) notFound()

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('../messages/en-us.json')
        : import(`../messages/${locale}.json`))
    ).default,
  }
})
