import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'

import fourImage from '@/public/4.svg'
import background from '@/public/space.png'

import { Interactions } from './components/not-found/interactions'
import { LottieAnimation } from './components/not-found/lottie'

async function getLottie() {
  return (
    await fetch(
      'https://lottie.host/ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json',
    )
  ).json()
}

export default async function NotFound() {
  const locale = await getLocale()
  const t = await getTranslations({ locale })

  const animationData = await getLottie()

  return (
    <>
      <Image
        src={background}
        alt={t('NotFound.backgroundAlt')}
        fill
        className="-z-10 object-cover"
        sizes="100vw"
        quality={100}
      />
      <main className="container mt-20 grow flex flex-col-reverse justify-center items-center text-center gap-8 px-6 md:justify-around md:text-left md:gap-0 md:flex-row md:px-20">
        <Interactions />
        <div className="flex items-center md:basis-1/3">
          <Image src={fourImage} alt={t('NotFound.numberFourAlt')} />
          <LottieAnimation
            animationData={animationData}
            loop
            autoplay
            className="grow"
          />
          <Image src={fourImage} alt={t('NotFound.numberFourAlt')} />
        </div>
      </main>
    </>
  )
}
