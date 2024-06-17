import { Metadata } from 'next'
import { notFound } from 'next/navigation'
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

import { Aside } from './components/aside'
import { Content } from './components/content'
import { Header } from './components/header'

import { createClient } from '@/prismicio'

type Props = Readonly<{
  params: { uid: string; locale: string }
}>

export async function generateStaticParams() {
  const client = createClient()

  const projects = await client.getAllByType('project')

  return projects.map(({ uid }) => ({ uid }))
}

export async function generateMetadata({
  params: { locale, uid },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale })

  const client = createClient()

  const project = await client.getByUID('project', uid, {
    graphQuery: projectGraphQuery,
    lang: locale,
  })

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

export default async function Projects({ params }: Props) {
  setRequestLocale(params.locale)

  const client = createClient()

  let project: ProjectDocumentWithTechs

  try {
    project = (await client.getByUID('project', params.uid, {
      graphQuery: projectGraphQuery,
      lang: params.locale,
    })) as ProjectDocumentWithTechs
  } catch (error) {
    console.error(error)
    return notFound()
  }

  const {
    cover,
    techs,
    role,
    startDate,
    endDate,
    github,
    liveDemo,
    name,
    story,
    team,
  } = project.data

  return (
    <main className="container mt-28 mb-8 grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 md:mb-24 md:px-28">
      <article className="bg-surface-primary space-y-6 md:col-span-2 md:rounded-2xl">
        <Header
          cover={cover}
          techs={techs}
          startDate={startDate}
          endDate={endDate}
        />
        <Content name={name} role={role} story={story} team={team} />
      </article>
      <Aside github={github} liveDemo={liveDemo} />
    </main>
  )
}
