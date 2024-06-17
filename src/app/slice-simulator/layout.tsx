import { Heebo, Kalam } from 'next/font/google'

import { cn } from '@/src/lib/utils'

import { ThemeProvider } from '@/src/context/theme-provider'

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heebo',
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kalam',
})

type Props = Readonly<{
  children: React.ReactNode
}>

export default function SliceMachineLayout({ children }: Props) {
  return (
    <html className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={cn(
          'font-heebo flex flex-col min-h-screen',
          heebo.variable,
          kalam.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
