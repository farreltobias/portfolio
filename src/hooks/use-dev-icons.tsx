'use client'

import { useEffect, useState } from 'react'

export function useDevIcons() {
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    if (isAvailable) return

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
    document.head.appendChild(link)
    setIsAvailable(true)

    return () => {
      document.head.removeChild(link)
      setIsAvailable(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isAvailable
}
