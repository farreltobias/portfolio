import { MetadataRoute } from 'next'
import { getTranslations } from 'next-intl/server'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = 'en-us'
  const t = await getTranslations({ locale, namespace: 'Manifest' })

  return {
    name: t('name'),
    short_name: t('short_name'),
    description: t('description'),
    start_url: '/',
    theme_color: '#171023',
    background_color: '#171023',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
