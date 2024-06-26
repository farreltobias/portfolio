/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

import { AnimatePresence, motion } from 'framer-motion'

import { score } from '@/src/lib/command-score'

import { Badge } from '@/src/components/badge'
import { Combobox } from '@/src/components/combobox'
import { Input } from '@/src/components/ui/input'
import { useProjects } from '@/src/context/projects-context'

import { TechnologyDocument } from '@/prismicio-types'

type Props = {
  techs: TechnologyDocument[]
}

export const Header: React.FC<Props> = ({ techs }) => {
  const t = useTranslations('Projects')

  const timer = useRef<NodeJS.Timeout>()

  const [filter, setFilter] = useState('')
  const [techsFilter, setTechsFilter] = useState<string[]>([])

  const { initialProjects, setProjects } = useProjects()

  const technologies = techs.filter(({ uid }) => techsFilter.includes(uid))
  const options = techs
    .filter(({ data: { filter } }) => filter)
    .map(({ uid, data: { name } }) => ({
      label: name,
      value: uid,
    }))

  const handleFilter = (filter: string) => {
    const filteredProjects = initialProjects.filter((project) => {
      const projectName = project.data.name[0]?.text
      return score(projectName, filter) > 0
    })

    const sortedProjects = filteredProjects.sort((a, b) => {
      const projectNameA = a.data.name[0]?.text
      const projectNameB = b.data.name[0]?.text

      const aScore = score(projectNameA, filter)
      const bScore = score(projectNameB, filter)

      return bScore - aScore
    })

    setProjects(sortedProjects)
  }

  useEffect(() => {
    const filteredProjects = initialProjects.filter((project) => {
      const techsIds = project.data.techs.map(({ tech }) => tech.uid)
      return (
        !techsFilter.length || techsIds.some((uid) => techsFilter.includes(uid))
      )
    })

    setProjects(filteredProjects)
  }, [techsFilter])

  useEffect(() => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      handleFilter(filter)
    }, 250)
  }, [filter])

  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <Input
          placeholder={t('search')}
          className="border-surface-secondary h-12 md:h-10"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        {/* <DatePickerWithRange date={date} setDate={setDate} /> */}
        <Combobox
          placeholder={t('filterByTechs.placeholder', {
            count: techsFilter.length,
          })}
          searchPlaceholder={t('filterByTechs.search')}
          searchNotFound={t('filterByTechs.notFound')}
          setValues={setTechsFilter}
          values={techsFilter}
          options={options}
        />
      </div>
      <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
        <AnimatePresence mode="popLayout">
          {technologies.map(({ uid, data: { icon, name, theme } }) => (
            <motion.div
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              key={uid}
            >
              <Badge
                color={theme || '#000'}
                onClick={() => {
                  setTechsFilter(techsFilter.filter((tech) => tech !== uid))
                }}
              >
                <i className={icon?.toString()} />
                {name}
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </header>
  )
}
