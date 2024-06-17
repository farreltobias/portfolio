import { useTranslations } from 'next-intl'

export const LocaleToSwitch = () => {
  const t = useTranslations('LocaleSwitch')

  return <>{t('language')}</>
}
