import { createContext, useContext } from 'react'

export type DevIconsContextType = {
  isAvailable: boolean
}

export const DevIconsContext = createContext<DevIconsContextType>({
  isAvailable: false,
})

export const useDevIcons = () => useContext(DevIconsContext)
