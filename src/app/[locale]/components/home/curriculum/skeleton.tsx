import { useTranslations } from 'next-intl'

import { ReadCvLogo } from '@phosphor-icons/react/dist/ssr'

import { Button } from '@/src/components/ui/button'

export const Skeleton: React.FC = () => {
  const t = useTranslations('Home')

  return (
    <Button variant="secondary" className="gap-2 w-fit" disabled>
      <ReadCvLogo size={20} />
      {t('resume')}
    </Button>
  )
}
