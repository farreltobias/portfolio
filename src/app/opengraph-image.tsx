import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = "Farrel's Portfolio"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const KalamRegular = fetch(
    new URL('@/public/Kalam-Regular.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  const KalamBold = fetch(
    new URL('@/public/Kalam-Bold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 192,
          background: '#171023',
          color: '#f4f5f5',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Farrel
        <span style={{ fontFamily: 'Heebo Bold, sans-serif' }}>.tech</span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Heebo Regular',
          data: await KalamRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Heebo Bold',
          data: await KalamBold,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  )
}
