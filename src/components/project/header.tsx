'use client'

import { useFormatter } from 'next-intl'

import { PrismicNextImage } from '@prismicio/next'

import { formatProjectDate } from '@/src/lib/format-project-date'
import { TechInsideProject } from '@/src/lib/graph-queries'

import { AspectRatio } from '../ui/aspect-ratio'
import { CardHeader } from '../ui/card'

import { ProjectDocumentData } from '@/prismicio-types'

type Props = Pick<ProjectDocumentData, 'startDate' | 'endDate' | 'cover'> & {
  techs: TechInsideProject[]
}

export const Header: React.FC<Props> = ({
  cover,
  startDate,
  endDate,
  techs,
}) => {
  const formatter = useFormatter()
  const formattedDate = formatProjectDate({ startDate, endDate, formatter })

  return (
    <CardHeader className="gap-4">
      <AspectRatio
        ratio={25 / 10}
        className="flex justify-center items-center bg-gradient-to-r from-primary-light to-highlight rounded-t-2xl"
      >
        <div className="relative w-full h-full">
          <PrismicNextImage
            fill
            field={cover}
            sizes="(max-width: 768px) 100vw, 15vw"
            className="object-cover"
          />
        </div>
      </AspectRatio>
      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground font-normal">
          {formattedDate}
        </span>
        <div className="flex gap-4 text-primary text-xl">
          {techs.map(({ tech }) => (
            <i key={tech.uid} className={tech.data.icon?.toString()}></i>
          ))}
        </div>
      </div>
    </CardHeader>
  )
}
