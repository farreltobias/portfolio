import { notFound } from 'next/navigation'
import {
  getFormatter,
  getTranslations,
  unstable_setRequestLocale as setRequestLocale,
} from 'next-intl/server'

import { ArrowUpRight, GlobeSimple } from '@phosphor-icons/react/dist/ssr'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import { formatProjectDate } from '@/src/lib/format-project-date'
import {
  ProjectDocumentWithTechs,
  projectGraphQuery,
} from '@/src/lib/graph-queries'
import { components } from '@/src/lib/rich-text-components'

import { DevIcon } from '@/src/components/dev-icon'
import { H2, Paragraph } from '@/src/components/typography'
import { AspectRatio } from '@/src/components/ui/aspect-ratio'
import { Button } from '@/src/components/ui/button'

import { ReturnButton } from './components/return-button'

import { createClient } from '@/prismicio'

type Props = Readonly<{
  params: { uid: string; locale: string }
}>

export default async function Projects({ params }: Props) {
  setRequestLocale(params.locale)

  const t = await getTranslations({ locale: params.locale })

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

  const formatter = await getFormatter()
  const formattedDate = formatProjectDate({ startDate, endDate, formatter })

  return (
    <main className="container mt-28 mb-8 grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 md:mb-24 md:px-28">
      <article className="bg-surface-primary space-y-6 md:col-span-2 md:rounded-2xl">
        <header className="relative flex flex-col gap-8">
          <ReturnButton />

          <AspectRatio
            ratio={25 / 11}
            className="flex justify-center items-center bg-gradient-to-r from-primary-light to-highlight md:rounded-t-2xl"
          >
            <div className="relative w-full h-full">
              <PrismicNextImage
                field={cover}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-contain"
                priority
              />
            </div>
          </AspectRatio>

          <div className="mx-12 space-y-6">
            <div className="flex justify-between">
              <Paragraph asChild>
                <span>{formattedDate}</span>
              </Paragraph>
              <div className="flex gap-4 text-primary text-2xl">
                {techs.map(({ tech }) => (
                  <DevIcon
                    key={tech.uid}
                    className={tech.data.icon?.toString()}
                  />
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="px-12 pb-12 space-y-6">
          <PrismicRichText field={name} components={components} />
          <div className="space-y-6">
            <Paragraph>
              <b>{t('Project.role')}:</b> {role}
              <br />
              {team && team.length >= 1 && (
                <>
                  <b>{t('Project.team')}: </b>
                  {team.map(({ name, role }) => `${name} (${role})`).join(', ')}
                </>
              )}
            </Paragraph>
            <PrismicRichText field={story} components={components} />
          </div>
        </div>
      </article>

      <aside className="bg-surface-primary p-8 h-fit w-full space-y-6 md:rounded-2xl">
        <H2 className="text-xl">{t('Project.aside.title')}</H2>
        <div className="space-y-4">
          <Button asChild size="lg" className="flex justify-between">
            <PrismicNextLink field={liveDemo}>
              <GlobeSimple size={20} />
              {t('Project.aside.liveDemo')}
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
              <DevIcon className="devicon-github-original text-xl" />
              {t('Project.aside.code')}
              <ArrowUpRight size={20} />
            </PrismicNextLink>
          </Button>
        </div>
      </aside>
    </main>
  )
}
