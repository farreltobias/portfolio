'use client'

import { useDevIcons } from '../context/dev-icons-context'

import { Skeleton } from './ui/skeleton'

type Props = {
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export const DevIcon: React.FC<Props> = ({ className, ...rest }) => {
  const isAvailable = useDevIcons()

  return isAvailable ? (
    <i className={className} {...rest}></i>
  ) : (
    <Skeleton className="h-6 w-6 rounded-sm" {...rest} />
  )
}
