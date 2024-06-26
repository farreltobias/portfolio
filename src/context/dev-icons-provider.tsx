'use client'

import { useDevIcons } from '../hooks/use-dev-icons'

import { DevIconsContext } from './dev-icons-context'

type Props = React.PropsWithChildren

export const DevIconsProvider: React.FC<Props> = ({ children }) => {
  const isAvailable = useDevIcons()

  return (
    <DevIconsContext.Provider value={{ isAvailable }}>
      {children}
    </DevIconsContext.Provider>
  )
}
