'use client'

import { useTranslations } from 'next-intl'

import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { PrismicNextLink } from '@prismicio/next'
import { AnimatePresence, motion } from 'framer-motion'

import { Link } from '@/src/navigation'

import { Button } from '../ui/button'
import { Card } from '../ui/card'

import { ProjectDocumentData } from '@/prismicio-types'

type Props = React.PropsWithChildren<
  Pick<ProjectDocumentData, 'github' | 'liveDemo'> & {
    uid: string
  }
>

export const Root: React.FC<Props> = ({ uid, github, liveDemo, children }) => {
  const t = useTranslations('Card')

  return (
    <AnimatePresence>
      <motion.section
        whileHover="hover"
        className="relative border rounded-2xl hover:border-highlight transition-colors"
      >
        <Card className="border-none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            variants={{ hover: { scale: 1, opacity: 1 } }}
            className="z-10 absolute top-4 right-4 flex flex-col gap-2"
          >
            <Button asChild variant="outline" size="icon">
              <PrismicNextLink field={github} aria-label={t('aria.github')}>
                <i className="devicon-github-original text-xl" />
              </PrismicNextLink>
            </Button>
            <Button asChild variant="outline" size="icon">
              <PrismicNextLink field={liveDemo} aria-label={t('aria.live')}>
                <ArrowUpRight weight="bold" size={20} />
              </PrismicNextLink>
            </Button>
          </motion.div>

          <Link href={{ pathname: '/projects/[uid]', params: { uid } }}>
            {children}
          </Link>
        </Card>
      </motion.section>
    </AnimatePresence>
  )
}
