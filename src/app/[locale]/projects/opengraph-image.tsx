import { ImageResponse } from 'next/og'
import { getTranslations } from 'next-intl/server'

import { locales } from '@/src/locale-config'

import { Logo } from '@/src/components/logo'

export const runtime = 'edge'

export const alt =
  "Farrel.tech Projects, all of Farrel's projects in one place."
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

type Props = {
  params: {
    locale: (typeof locales)[number]
  }
}

export default async function Image({ params: { locale } }: Props) {
  const t = await getTranslations({ locale })

  const Kalam = fetch(new URL('@/public/Kalam.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  )

  return new ImageResponse(
    (
      <div
        style={{
          background: '#171023',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Logo width={751} height={227} fill="#F5F6F6" />
        <div
          style={{
            marginTop: 40,
            fontSize: 64,
            lineHeight: '24px',
            color: '#7DFFAF',
          }}
        >
          {t('Navbar.projects')}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Heebo',
          data: await Kalam,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
