'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { ArrowLeft } from '@phosphor-icons/react'

import { Button } from '@/src/components/ui/button'

export const ReturnButton: React.FC = () => {
  const t = useTranslations('Project')

  const router = useRouter()

  return (
    <Button
      aria-label={t('aria.back')}
      onClick={() => router.back()}
      variant="secondary"
      size="icon"
      className="absolute z-10 top-6 left-6 shadow-lg"
    >
      <ArrowLeft size={20} />
    </Button>
  )
}
