import {
  ProjectDocument,
  ProjectDocumentData,
  TechnologyDocument,
} from '@/prismicio-types'

export const projectGraphQuery = `{
  project {
    name
    cover
    role
    team
    story
    description
    startDate
    endDate
    liveDemo
    github
    meta_title
    meta_description
    meta_image
    techs {
      tech {
        ...on technology {
          icon
        }
      }
    }
  }
}`

export type TechInsideProject = {
  tech: TechnologyDocument
}

export type ProjectDocumentWithTechs = Omit<ProjectDocument, 'data'> & {
  data: Omit<ProjectDocumentData, 'techs'> & {
    techs: TechInsideProject[]
  }
}
