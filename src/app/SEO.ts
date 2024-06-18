import { Metadata } from 'next'

export const defaultSEO: Metadata = {
  metadataBase: new URL('https://www.farrel.tech'),
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',

  authors: [
    {
      name: 'Guilherme Farrel de Souza',
      url: 'https://farrel.tech',
    },
  ],
  category: 'portfolio',
  creator: 'Guilherme Farrel de Souza',
  publisher: 'Farrel.tech',

  formatDetection: {
    url: true,
    email: true,
    address: false,
    telephone: false,
    date: false,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
