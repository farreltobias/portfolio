import { Suspense } from 'react'
import { unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'

import { locales } from '@/src/locale-config'

import { Header } from './components/header'
import { List } from './components/list'

import { createClient } from '@/prismicio'

type Props = {
  params: { locale: (typeof locales)[number] }
}

export default async function Projects({ params }: Props) {
  setRequestLocale(params.locale)

  const client = createClient()

  const techs = await client.getAllByType('technology', {
    lang: params.locale,
  })

  return (
    <main className="container flex flex-col px-6 mt-28 pb-8 mb-auto gap-8 md:pb-24 md:mt-44 md:px-28">
      <Header techs={techs} />
      <Suspense fallback={<List.Skeleton />}>
        <List.Root />
      </Suspense>
    </main>
  )
}
