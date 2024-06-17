import { useTranslations } from 'next-intl'

import { PrismicRichText } from '@prismicio/react'

import { components } from '@/src/lib/rich-text-components'

import { Paragraph } from '@/src/components/typography'

import { ProjectDocumentData } from '@/prismicio-types'

type Props = Pick<ProjectDocumentData, 'name' | 'role' | 'team' | 'story'>

export const Content: React.FC<Props> = ({ name, role, team, story }) => {
  const t = useTranslations('Project')

  return (
    <div className="px-12 pb-12 space-y-6">
      <PrismicRichText field={name} components={components} />
      <div className="space-y-6">
        <Paragraph>
          <b>{t('role')}:</b> {role}
          <br />
          {team && team.length > 1 && (
            <>
              <b>{t('team')}: </b>
              {team.map(({ name, role }) => `${name} (${role})`).join(', ')}
            </>
          )}
        </Paragraph>
        <PrismicRichText field={story} components={components} />
      </div>
    </div>
  )
}
