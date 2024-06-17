'use client'

import { ComponentProps } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'

import { pathnames } from '@/src/locale-config'
import { Link } from '@/src/navigation'

import { Button } from '../ui/button'

export function NavLink<Pathname extends keyof typeof pathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const currentPathname =
    selectedLayoutSegment && selectedLayoutSegment !== '(home)'
      ? `/${selectedLayoutSegment}`
      : '/'

  const pathname = typeof href === 'object' ? href.pathname : href
  const hash = typeof href === 'object' ? href.hash : undefined

  const isActive = currentPathname === pathname && (!hash || hash === 'start')

  return (
    <Button asChild variant="ghost">
      <Link
        aria-current={isActive ? 'page' : undefined}
        style={{ fontWeight: isActive ? 'bold' : 'normal' }}
        href={href}
        {...rest}
      />
    </Button>
  )
}
