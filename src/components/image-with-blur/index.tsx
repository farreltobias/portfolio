import Image, { StaticImageData } from 'next/image'

import { AspectRatio } from '@/src/components/ui/aspect-ratio'

import { getBlurImage } from './blur'

type Props = {
  src: string
  image: StaticImageData
  ratio: number
} & React.ComponentProps<typeof Image>

export const ImageWithBlur: React.FC<Props> = async ({
  image,
  ratio,
  src,
  alt,
  ...rest
}) => {
  const { placeholder } = await getBlurImage(src)

  return (
    <AspectRatio ratio={ratio}>
      <div className="relative w-full h-full overflow-visible">
        <Image
          fill
          placeholder="blur"
          blurDataURL={placeholder}
          src={image}
          alt={alt}
          {...rest}
        />
      </div>
    </AspectRatio>
  )
}
