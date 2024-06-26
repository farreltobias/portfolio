import { MetadataRoute } from 'next'
import { getTranslations } from 'next-intl/server'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = 'en-us'
  const t = await getTranslations({ locale })

  return {
    name: t('Manifest.name'),
    short_name: t('Manifest.short_name'),
    description: t('Manifest.description'),
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
