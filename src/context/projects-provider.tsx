'use client'

import { useState } from 'react'

import { ProjectsContext, ProjectsContextType } from './projects-context'

type Props = React.PropsWithChildren<Pick<ProjectsContextType, 'projects'>>

export const ProjectsProvider: React.FC<Props> = ({
  children,
  projects: initialProjects,
}) => {
  const [projects, setProjects] = useState(initialProjects)

  return (
    <ProjectsContext.Provider
      value={{ projects, initialProjects, setProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
