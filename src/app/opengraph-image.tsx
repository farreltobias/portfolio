import { ImageResponse } from 'next/og'

import { Logo } from '@/src/components/logo'

export const runtime = 'edge'

export const alt = "Farrel.tech, Farrel's personal portfolio website."
export const size = {
  width: 1200,
  height: 630,
}

export const metadataBase = new URL('https://www.farrel.tech')

export const contentType = 'image/png'

export default async function Image() {
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
      </div>
    ),
    {
      ...size,
    },
  )
}
