'use client'

import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { score } from '@/src/lib/command-score'
import { ProjectDocumentWithTechs } from '@/src/lib/graph-queries'

import { Project } from '@/src/components/project'
import { useFilter } from '@/src/context/filter-context'

type Props = {
  projects: ProjectDocumentWithTechs[]
}

export const List: React.FC<Props> = ({ projects: initialProjects }) => {
  const { filter, techsFilter } = useFilter()
  const [projects, setProjects] = useState(initialProjects)

  useEffect(() => {
    const filteredProjects = initialProjects.filter((project) => {
      const projectName = project.data.name[0]?.text
      const techsIds = project.data.techs.map(({ tech }) => tech.uid)

      const hasTech = techsFilter.length
        ? techsIds.some((uid) => techsFilter.includes(uid))
        : true

      const hasScore = score(projectName, filter) > 0

      return hasScore && hasTech
    })

    const sortedProjects = filteredProjects.sort((a, b) => {
      const projectNameA = a.data.name[0]?.text
      const projectNameB = b.data.name[0]?.text

      const aScore = score(projectNameA, filter)
      const bScore = score(projectNameB, filter)

      return bScore - aScore
    })

    setProjects(sortedProjects)

    return () => setProjects([])
  }, [filter, techsFilter, initialProjects])

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
