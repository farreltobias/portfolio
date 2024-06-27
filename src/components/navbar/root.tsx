'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

import { Moon, SunDim } from '@phosphor-icons/react'
import { motion, Variants } from 'framer-motion'

import { cn } from '@/src/lib/utils'
import { Link } from '@/src/navigation'

import { Logo } from '../logo'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

import { Hamburger } from './hamburger'
import { LocaleButton } from './locale-button'
import { NavLink } from './nav-link'

const sidebarVariants: Variants = {
  open: {
    x: 'var(--sidebar-open-x, 1)',
    opacity: 'var(--sidebar-open-opacity, 1)',
  },
  closed: {
    x: 'var(--sidebar-closed-x, 1)',
    opacity: 'var(--sidebar-closed-opacity, 1)',
  },
}

const backgroundVariants: Variants = {
  open: {
    visibility: 'var(--background-open-visibility, hidden)' as 'hidden',
    opacity: 'var(--sidebar-open-opacity, 0)',
  },
  closed: {
    visibility: 'var(--background-closed-visibility, hidden)' as 'hidden',
    opacity: 'var(--sidebar-closed-opacity, 0)',
  },
}

export const Navbar: React.FC = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false)

  useEffect(() => {
    if (openNavbar) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [openNavbar])

  const closeNavbar = () => {
    if (openNavbar) {
      setOpenNavbar(false)
    }
  }

  const t = useTranslations('Navbar')

  const navItems = [
    {
      label: t('home'),
      pathname: '/',
      hash: 'start',
    },
    {
      label: t('about'),
      pathname: '/',
      hash: 'about',
    },
    {
      label: t('projects'),
      pathname: '/projects',
      hash: '',
    },
    {
      label: t('contact'),
      pathname: '/',
      hash: 'contact',
    },
  ] as const

  const { setTheme, systemTheme, theme } = useTheme()

  return (
    <header className="fixed top-0 w-full z-20 bg-background shadow-lg h-20">
      <div
        className={cn(
          'relative flex justify-between items-center md:container md:py-4 md:px-20',
          'max-md:[--sidebar-open-x:0%] max-md:[--sidebar-closed-x:100%]',
          'max-md:[--sidebar-open-opacity:100%] max-md:[--sidebar-closed-opacity:0%]',
          'max-md:[--background-open-visibility:visible] max-md:[--background-closed-visibility:hidden]',
        )}
      >
        <div className="bg-background z-10 flex justify-between items-center p-4 md:p-0 w-full">
          <Link
            href="/"
            className="p-2 rounded focus:outline-none"
            aria-label={t('aria.logo')}
          >
            <Logo className="fill-foreground" />
          </Link>

          <Button
            aria-label={t('aria.hamburger')}
            variant="ghost"
            size="icon"
            className="md:invisible flex flex-col items-center justify-center"
            onClick={() => {
              setOpenNavbar(!openNavbar)
            }}
          >
            <Hamburger show={openNavbar} />
          </Button>
        </div>

        <motion.div
          variants={backgroundVariants}
          initial="closed"
          animate={openNavbar ? 'open' : 'closed'}
          onTap={() => setOpenNavbar(false)}
          className="absolute inset-0 h-screen backdrop-blur-sm [-webkit-backdrop-filter:blur(4px)] bg-[rgba(0,0,0,0.2)]"
        />
        <motion.div
          variants={sidebarVariants}
          initial="closed"
          animate={openNavbar ? 'open' : 'closed'}
          className="bg-surface-primary z-10 h-screen w-full flex flex-col items-end absolute top-0 -right-1/4 pt-6 pr-[25%] gap-6 md:right-0 md:p-0 mt-20 md:relative md:flex-row md:mt-0 md:items-center md:h-auto md:bg-transparent md:justify-end md:gap-3"
        >
          <nav className="flex flex-col items-end md:flex-row gap-6 md:gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={{ pathname: item.pathname, hash: item.hash }}
                onClick={closeNavbar}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="block px-6 w-full md:hidden">
            <Separator />
          </div>
          <div className="flex gap-4 px-6 md:gap-3 md:p-0">
            <LocaleButton onClick={closeNavbar} />
            <Button
              onClick={() => {
                const actualTheme = theme === 'system' ? systemTheme : theme
                setTheme(actualTheme === 'dark' ? 'light' : 'dark')
                closeNavbar()
              }}
              variant="secondary"
              className="md:bg-transparent md:text-foreground md:hover:bg-accent md:hover:text-accent-foreground"
              size="icon"
            >
              <SunDim className="h-6 w-6 md:h-[1.2rem] md:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <Moon className="absolute h-6 w-6 md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
