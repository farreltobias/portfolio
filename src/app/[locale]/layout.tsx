import { Metadata } from 'next'
import { Heebo, Kalam } from 'next/font/google'
import {
  getTranslations,
  unstable_setRequestLocale as setRequestLocale,
} from 'next-intl/server'

import { cn } from '@/src/lib/utils'
import { locales } from '@/src/locale-config'

import { Footer } from '@/src/components/footer'
import { Navbar } from '@/src/components/navbar'
import { Toaster } from '@/src/components/ui/toaster'
import { Providers } from '@/src/context/providers'

import { SEO } from '../SEO'

import '@/src/styles/globals.css'

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heebo',
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kalam',
})

type Props = Readonly<{
  children: React.ReactNode
  params: { locale: (typeof locales)[number] }
}>

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale })

  return {
    ...SEO,

    title: {
      template: '%s | Farrel.tech',
      default: t('LocaleLayout.home.title'),
    },
    description: t('LocaleLayout.home.description'),
    alternates: {
      canonical: '/',
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}`]),
      ),
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

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={cn(
          'font-heebo flex flex-col min-h-screen',
          heebo.variable,
          kalam.variable,
        )}
      >
        <Providers>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
