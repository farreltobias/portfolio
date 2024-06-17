'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Link } from '@/src/navigation'

import { H1, Paragraph } from '@/src/components/typography'
import { Button } from '@/src/components/ui/button'

export const Interactions: React.FC = () => {
  const router = useRouter()

  const t = useTranslations('NotFound')

  return (
    <div className="space-y-14 basis-1/3">
      <header className="space-y-6">
        <H1>
          {t('title1')} <br />
          {t('title2')}
        </H1>
        <Paragraph>
          {t('paragraph1')} <br />
          {t('paragraph2')}
        </Paragraph>
      </header>
      <div className="flex gap-2 justify-center md:justify-normal">
        <Button variant="secondary" size="lg" onClick={() => router.back()}>
          {t('back')}
        </Button>
        <Button asChild size="lg">
          <Link href="/">{t('returnHome')}</Link>
        </Button>
      </div>
    </div>
  )
}
