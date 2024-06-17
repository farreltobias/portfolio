import { getLocale } from 'next-intl/server'

import { filter } from '@prismicio/client'

import { createClient } from '@/prismicio'

export const Techs: React.FC = async () => {
  const locale = await getLocale()
  const client = createClient()

  const techs = await client.getAllByType('technology', {
    filters: [filter.at('my.technology.isHighlight', true)],
    pageSize: 5,
    lang: locale,
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
  })

  return (
    <div className="flex gap-6 text-primary text-2xl">
      {techs.map((tech) => (
        <i key={tech.uid} className={tech.data.icon?.toString()}></i>
      ))}
    </div>
  )
}
