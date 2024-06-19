import { getLocale } from 'next-intl/server'

import { filter } from '@prismicio/client'

import {
  ProjectDocumentWithTechs,
  projectGraphQuery,
} from '@/src/lib/graph-queries'

import { Project } from '@/src/components/project'

import { createClient } from '@/prismicio'

export const Projects: React.FC = async () => {
  const locale = await getLocale()

  const client = createClient()

  const projects = (await client.getAllByType('project', {
    filters: [filter.at('my.project.isHighlight', true)],
    pageSize: 3,
    graphQuery: projectGraphQuery,
    lang: locale,
    orderings: {
      field: 'my.project.endDate',
      direction: 'desc',
    },
  })) as ProjectDocumentWithTechs[]

  return projects.map(({ uid, data }) => (
    <li key={uid}>
      <Project.Root uid={uid} github={data.github} liveDemo={data.liveDemo}>
        <Project.Header
          cover={data.cover}
          techs={data.techs}
          startDate={data.startDate}
          endDate={data.endDate}
        />
        <Project.Content name={data.name} description={data.description} />
      </Project.Root>
    </li>
  ))
}
