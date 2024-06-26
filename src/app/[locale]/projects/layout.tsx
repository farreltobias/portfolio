import { Metadata } from 'next'
import {
  getTranslations,
  unstable_setRequestLocale as setRequestLocale,
} from 'next-intl/server'

import * as prismicH from '@prismicio/helpers'

import {
  ProjectDocumentWithTechs,
  projectGraphQuery,
} from '@/src/lib/graph-queries'
import { locales } from '@/src/locale-config'

import { ProjectsProvider } from '@/src/context/projects-provider'

import { createClient } from '@/prismicio'

type Props = {
  params: { locale: (typeof locales)[number] }
  children: React.ReactNode
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale })

  const client = createClient()

  const projects = await client.getAllByType('project', {
    lang: locale,
  })

  const names = projects
    .slice(0, 3)
    .map(({ data }) => prismicH.asText(data.name))

  const namesString =
    names.length > 1
      ? `${names.slice(0, names.length - 2).join(', ')} and ${names.slice(-1)}`
      : names[0]

  return {
    title: t('LocaleLayout.projects.title'),
    description: t('LocaleLayout.projects.description', {
      projects: namesString,
    }),
    alternates: {
      canonical: `/${locale}/projects`,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}/projects`]),
      ),
    },
    openGraph: {
      url: `/${locale}/projects`,
      siteName: 'Farrel.tech',
      locale: t('LocaleLayout.locale'),
      type: 'website',
    },
  }
}

export default async function Layout({ children, params }: Props) {
  setRequestLocale(params.locale)

  const client = createClient()

  const projects = (await client.getAllByType('project', {
    graphQuery: projectGraphQuery,
    lang: params.locale,
    orderings: {
      field: 'my.project.endDate',
      direction: 'desc',
    },
  })) as ProjectDocumentWithTechs[]

  return <ProjectsProvider projects={projects}>{children}</ProjectsProvider>
}
