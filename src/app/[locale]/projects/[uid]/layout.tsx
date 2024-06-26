import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import * as prismicH from '@prismicio/helpers'

import { projectGraphQuery } from '@/src/lib/graph-queries'
import { locales } from '@/src/locale-config'

import { createClient } from '@/prismicio'

type Props = Readonly<{
  children: React.ReactNode
  params: { uid: string; locale: string }
}>

export async function generateStaticParams() {
  const client = createClient()

  const projects = await client.getAllByType('project', { lang: '*' })

  return projects.map(({ uid, lang }) => ({ uid, locale: lang }))
}

export async function generateMetadata({
  params: { locale, uid },
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale })

  const client = createClient()

  let project

  try {
    project = await client.getByUID('project', uid, {
      graphQuery: projectGraphQuery,
      lang: locale,
    })
  } catch (error) {
    console.error(error)
    return notFound()
  }

  const ogImageSrc = prismicH.asImageSrc(project.data.meta_image) as string
  const { dimensions: ogImageDimensions, alt: ogImageAlt } =
    project.data.meta_image

  return {
    title: project.data.meta_title,
    description: `${project.data.meta_description} ${t('LocaleLayout.home.description')}`,
    alternates: {
      canonical: project.url,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}/projects/${project.uid}`]),
      ),
    },
    openGraph: {
      url: project.url as string,
      siteName: 'Farrel.tech',
      images: [
        {
          url: ogImageSrc,
          alt: ogImageAlt as string,
          ...ogImageDimensions,
        },
      ],
      locale: t('LocaleLayout.locale'),
      type: 'article',
    },
  }
}

export default async function Layout({ children }: Props) {
  return children
}
