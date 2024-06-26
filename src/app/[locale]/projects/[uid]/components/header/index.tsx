import { useFormatter } from 'next-intl'

import type { DateField, ImageFieldImage } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'

import { formatProjectDate } from '@/src/lib/format-project-date'
import type { TechInsideProject } from '@/src/lib/graph-queries'

import { DevIcon } from '@/src/components/dev-icon'
import { Paragraph } from '@/src/components/typography'
import { AspectRatio } from '@/src/components/ui/aspect-ratio'

import { ReturnButton } from './return-button'

type Props = {
  startDate: DateField
  endDate: DateField
  techs: TechInsideProject[]
  cover: ImageFieldImage
}

export const Header: React.FC<Props> = ({ techs, cover, ...dates }) => {
  const formatter = useFormatter()
  const formattedDate = formatProjectDate({ ...dates, formatter })

  return (
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
              <DevIcon key={tech.uid} className={tech.data.icon?.toString()} />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
