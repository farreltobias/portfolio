'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Spinner } from '@phosphor-icons/react'
import { z } from 'zod'

import { Button } from '@/src/components/ui/button'
import {
  Form as FormPrimitive,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'
import { toast } from '@/src/components/ui/use-toast'

import { sendEmail } from './submit'

export const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const t = useTranslations('Home.form')

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('error.name'),
    }),
    email: z.string().email({
      message: t('error.email'),
    }),
    message: z.string().min(10, {
      message: t('error.message'),
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)

    try {
      await sendEmail(values)

      toast({
        title: t('toast.successTitle'),
        description: t('toast.successDescription'),
      })

      form.reset()
    } catch (error) {
      console.error(error)

      toast({
        variant: 'destructive',
        title: t('toast.errorTitle'),
        description: t('toast.errorDescription'),
      })
    }

    setIsLoading(false)
  }

  return (
    <FormPrimitive {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 basis-5/12"
      >
        <div className="flex flex-col gap-4 grow">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t('name')}
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={t('email')}
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="grow">
                <FormControl>
                  <Textarea
                    placeholder={t('message')}
                    disabled={isLoading}
                    className="h-40 resize-none md:h-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="gap-2 mt-auto w-fit"
          disabled={isLoading}
        >
          {!isLoading ? (
            <>
              {t('send')} <ArrowRight size={20} />
            </>
          ) : (
            <div className="flex justify-center items-center gap-2 text-secondary-foreground w-40">
              <Spinner size={20} className="animate-spin" /> {t('loading')}
            </div>
          )}
        </Button>
      </form>
    </FormPrimitive>
  )
}
