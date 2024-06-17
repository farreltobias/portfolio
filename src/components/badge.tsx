import { X } from '@phosphor-icons/react'

import { cn } from '@/src/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLButtonElement> {}

function Badge({ className, children, color, ...props }: BadgeProps) {
  return (
    <button
      style={{ backgroundColor: color, color }}
      className={cn(
        'relative inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold cursor-pointer whitespace-pre',
        className,
      )}
      {...props}
    >
      <div className="absolute bg-white dark:bg-black inset-0 rounded-full opacity-60 dark:opacity-70" />
      <div className="flex items-center z-10 gap-1.5">
        {children}
        <X size={14} className="text-foreground" />
      </div>
    </button>
  )
}

export { Badge }
