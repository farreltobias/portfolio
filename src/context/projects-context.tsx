import { createContext, useContext } from 'react'

import { ProjectDocumentWithTechs } from '../lib/graph-queries'

export type ProjectsContextType = {
  projects: ProjectDocumentWithTechs[]
  initialProjects: ProjectDocumentWithTechs[]
  setProjects: (projects: ProjectDocumentWithTechs[]) => void
}

export const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  initialProjects: [],
  setProjects: () => {},
})

export const useProjects = () => useContext(ProjectsContext)
