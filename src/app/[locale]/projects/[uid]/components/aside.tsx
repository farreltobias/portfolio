import { useTranslations } from 'next-intl'

import { ArrowUpRight, GlobeSimple } from '@phosphor-icons/react/dist/ssr'
import { PrismicNextLink } from '@prismicio/next'

import { H2 } from '@/src/components/typography'
import { Button } from '@/src/components/ui/button'

import { ProjectDocumentData } from '@/prismicio-types'

type Props = Pick<ProjectDocumentData, 'liveDemo' | 'github'>

export const Aside: React.FC<Props> = ({ github, liveDemo }) => {
  const t = useTranslations('Project')

  return (
    <aside className=" bg-surface-primary p-8 h-fit w-full space-y-6 md:rounded-2xl">
      <H2 className="text-xl">{t('aside.title')}</H2>
      <div className="space-y-4">
        <Button asChild size="lg" className="flex justify-between">
          <PrismicNextLink field={liveDemo}>
            <GlobeSimple size={20} />
            {t('aside.liveDemo')}
            <ArrowUpRight size={20} />
          </PrismicNextLink>
        </Button>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="flex justify-between"
        >
          <PrismicNextLink field={github}>
            <i className="devicon-github-original text-xl" />
            {t('aside.code')}
            <ArrowUpRight size={20} />
          </PrismicNextLink>
        </Button>
      </div>
    </aside>
  )
}
