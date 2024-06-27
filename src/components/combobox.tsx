'use client'

import * as React from 'react'
import { useTranslations } from 'next-intl'

import type { KeyTextField } from '@prismicio/client'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/src/lib/utils'

import { Button } from '@/src/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/src/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/src/components/ui/popover'

type Props = {
  values: string[]
  setValues: (value: string[]) => void
  options: { label: KeyTextField; value: string }[]
  placeholder: string
  searchPlaceholder: string
  searchNotFound: string
}

export const Combobox: React.FC<Props> = ({
  values,
  setValues,
  options,
  placeholder,
  searchPlaceholder,
  searchNotFound,
}) => {
  const t = useTranslations('Combobox')

  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label={t('aria.icon')}
          className="w-full px-3 md:w-52 justify-between border-surface-secondary h-12"
        >
          {placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[calc(100vw-3rem)] md:w-52 p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandEmpty>{searchNotFound}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    const isValueSelected = values.includes(currentValue)

                    let newValues = []

                    if (isValueSelected) {
                      newValues = values.filter(
                        (value) => value !== currentValue,
                      )
                    } else {
                      newValues = [...values, currentValue]
                    }

                    setValues(newValues)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      values.includes(option.value)
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
