import { getLocale, getTranslations } from 'next-intl/server'

import { ReadCvLogo } from '@phosphor-icons/react/dist/ssr'
import { PrismicNextLink } from '@prismicio/next'

import { Button, ButtonProps } from '@/src/components/ui/button'

import { createClient } from '@/prismicio'

type Props = {
  variant?: ButtonProps['variant']
}

export const Curriculum: React.FC<Props> = async ({ variant }) => {
  const locale = await getLocale()

  const client = createClient()

  const {
    data: { curriculum },
  } = await client.getSingle('home', {
    lang: locale,
  })

  const t = await getTranslations()

  return (
    <Button asChild variant={variant} className="gap-2 w-fit">
      <PrismicNextLink field={curriculum} target="_blank">
        <ReadCvLogo size={20} />
        {t('Home.resume')}
      </PrismicNextLink>
    </Button>
  )
}
