'use client'

import { useState } from 'react'
import { useFormatter } from 'next-intl'

import { PrismicNextImage } from '@prismicio/next'

import { formatProjectDate } from '@/src/lib/format-project-date'
import { TechInsideProject } from '@/src/lib/graph-queries'

import { AspectRatio } from '../ui/aspect-ratio'
import { CardHeader } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

import { ProjectDocumentData } from '@/prismicio-types'

type Props = Pick<ProjectDocumentData, 'startDate' | 'endDate' | 'cover'> & {
  techs: TechInsideProject[]
  priorityImage?: boolean
}

export const Header: React.FC<Props> = ({
  cover,
  startDate,
  endDate,
  techs,
  priorityImage = false,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const formatter = useFormatter()
  const formattedDate = formatProjectDate({ startDate, endDate, formatter })

  return (
    <CardHeader className="gap-4">
      <AspectRatio
        ratio={25 / 10}
        className="flex justify-center items-center bg-gradient-to-r from-primary-light to-highlight rounded-t-2xl"
      >
        <div className="relative w-full h-full flex items-end justify-center">
          {!isImageLoaded && (
            <Skeleton className="absolute left-1/2 -translate-x-1/2 w-5/6 h-5/6 rounded-none rounded-t-xl animate-pulse bg-muted bottom-0" />
          )}
          <PrismicNextImage
            fill
            priority={priorityImage}
            field={cover}
            quality={75}
            sizes="(max-width: 768px) 85vw, 20vw"
            className="object-cover"
            onLoad={() => {
              setIsImageLoaded(true)
            }}
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
