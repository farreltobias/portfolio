import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/src/lib/utils'

type Props = React.PropsWithChildren<{
  asChild?: boolean
  className?: string
}>

export const H1: React.FC<Props> = ({ asChild, children, className }) => {
  const Comp = asChild ? Slot : 'h1'
  return (
    <Comp
      className={cn('scroll-m-20 font-heebo text-4xl font-medium', className)}
    >
      {children}
    </Comp>
  )
}

export const H2: React.FC<Props> = ({ asChild, children, className }) => {
  const Comp = asChild ? Slot : 'h2'
  return (
    <Comp
      className={cn('scroll-m-20 font-heebo text-2xl font-medium', className)}
    >
      {children}
    </Comp>
  )
}

export const ReadingText: React.FC<Props> = ({
  asChild,
  children,
  className,
}) => {
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp className={cn('font-heebo text-lg font-normal', className)}>
      {children}
    </Comp>
  )
}

export const Paragraph: React.FC<Props> = ({
  asChild,
  children,
  className,
}) => {
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp
      className={cn(
        'font-heebo text-base font-normal text-muted-foreground',
        className,
      )}
    >
      {children}
    </Comp>
  )
}

type HSProps = Props & {
  gradient?: boolean
}

export const HS: React.FC<HSProps> = ({
  asChild,
  children,
  className,
  gradient = true,
}) => {
  const Comp = asChild ? Slot : 'h1'
  return (
    <Comp
      className={cn(
        'scroll-m-20 font-kalam text-[2.5rem] leading-[3.125rem] font-normal',
        gradient && 'w-max text-transparent bg-clip-text',
        className,
      )}
    >
      {children}
    </Comp>
  )
}

export const SectionTitle: React.FC<Props> = ({
  asChild,
  children,
  className,
}) => {
  const Comp = asChild ? Slot : 'h1'
  return (
    <Comp
      className={cn(
        'scroll-m-20 font-kalam text-base leading-4 font-normal',
        className,
      )}
    >
      {children}
    </Comp>
  )
}
