'use client'

import { useTransition } from 'react'
import { useParams } from 'next/navigation'

import { locales } from '@/src/locale-config'
import { usePathname, useRouter } from '@/src/navigation'

import { Button } from '../ui/button'

import { LocaleToSwitch } from './locale-switcher'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const LocaleButton: React.FC<Props> = ({ onClick = () => {} }) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onLocaleChange(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    onClick(event)

    const currentLocale = event.view.document.documentElement.lang
    const nextLocale =
      locales.find((locale) => locale !== currentLocale) || locales[0]

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      )
    })
  }

  return (
    <Button
      disabled={isPending}
      variant="secondary"
      className="md:bg-transparent md:text-foreground md:hover:bg-accent md:hover:text-accent-foreground"
      size="icon"
      onClick={onLocaleChange}
    >
      <LocaleToSwitch />
    </Button>
  )
}
