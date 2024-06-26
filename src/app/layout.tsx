import { ReactNode } from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { defaultSEO } from './SEO'

type Props = {
  children: ReactNode
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: 'en-us' })

  return {
    ...defaultSEO,

    title: 'Farrel.tech',
    description: t('LocaleLayout.home.description'),

    alternates: {
      canonical: '/',
    },
    openGraph: {
      url: '/',
      siteName: 'Farrel.tech',
      locale: t('LocaleLayout.locale'),
      type: 'website',
    },

    keywords: t('LocaleLayout.keywords'),
    applicationName: t('LocaleLayout.applicationName'),
  }
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children
}
