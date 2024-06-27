'use client'

import Image from 'next/image'

import { AspectRatio } from '@/src/components/ui/aspect-ratio'

type Props = {
  ratio: number
} & React.ComponentProps<typeof Image>

export const ImageWithSkeleton: React.FC<Props> = ({ ratio, alt, ...rest }) => {
  return (
    <AspectRatio ratio={ratio}>
      <div className="relative w-full h-full overflow-visible">
        <Image
          fill
          data-loaded="false"
          className="data-[loaded=false]:animate-pulse data-[loaded=false]:rounded-md data-[loaded=false]:bg-muted"
          onLoad={(event) => {
            event.currentTarget.setAttribute('data-loaded', 'true')
          }}
          alt={alt}
          {...rest}
        />
      </div>
    </AspectRatio>
  )
}
