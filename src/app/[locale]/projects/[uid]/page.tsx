import { notFound } from 'next/navigation'
import { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'

import {
  ProjectDocumentWithTechs,
  projectGraphQuery,
} from '@/src/lib/graph-queries'

import { Aside } from './components/aside'
import { Content } from './components/content'
import { Header } from './components/header'

import { createClient } from '@/prismicio'

type Props = Readonly<{
  params: { uid: string; locale: string }
}>

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
