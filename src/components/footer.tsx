'use client'

import { useTranslations } from 'next-intl'

import { ArrowUp } from '@phosphor-icons/react/dist/ssr'

import { contacts } from '../lib/contact'

import { Button } from './ui/button'
import { Paragraph } from './typography'

export const Footer: React.FC = () => {
  const t = useTranslations('Footer')

  return (
    <footer className="container flex flex-col py-6 px-4 gap-4 md:flex-row md:justify-between md:items-center md:py-8 md:px-28">
      <Paragraph className="text-sm">
        Farrel.tech 2024. {t('paragraph1')}{' '}
        <Button
          asChild
          className="text-muted-foreground p-0 h-min md:p-0"
          variant="link"
        >
          <a
            href="https://www.figma.com/community/file/1303713673750465529/portfolio-estrategico"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('rocketseat')}
          </a>
        </Button>
        {t('paragraph2')}
      </Paragraph>
      <div className="flex flex-wrap justify-between md:gap-2">
        {contacts.map(({ title, href }) => (
          <Button key={title} asChild variant="outline" className="p-2">
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          aria-label={t('aria.top_page')}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <ArrowUp size={20} />
        </Button>
      </div>
    </footer>
  )
}
