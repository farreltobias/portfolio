'use client'

import { FilterProvider } from '@/src/context/filter-context'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <FilterProvider>{children}</FilterProvider>
}
