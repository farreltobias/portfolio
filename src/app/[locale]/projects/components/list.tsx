'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { Project } from '@/src/components/project'
import { useProjects } from '@/src/context/projects-context'

export const List: React.FC = () => {
  const { projects } = useProjects()

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <AnimatePresence mode="popLayout">
        {projects.length === 0 && (
          <motion.li
            key="no-products"
            className="col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-center text-surface-secondary">
              No projects found
            </p>
          </motion.li>
        )}

        {projects.length > 0 &&
          projects.map(({ uid, data }) => (
            <motion.li
              layout
              key={uid}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <Project.Root
                uid={uid}
                github={data.github}
                liveDemo={data.liveDemo}
              >
                <Project.Header
                  cover={data.cover}
                  techs={data.techs}
                  startDate={data.startDate}
                  endDate={data.endDate}
                />
                <Project.Content
                  name={data.name}
                  description={data.description}
                />
              </Project.Root>
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  )
}
