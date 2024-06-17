import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { PrismicPreview } from '@prismicio/next'

import { ThemeProvider } from './theme-provider'

import { repositoryName } from '@/prismicio'

type Props = React.PropsWithChildren

export const Providers: React.FC<Props> = async ({ children }) => {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
