import { JSXMapSerializer, PrismicRichText } from '@prismicio/react'

import { Paragraph, ReadingText } from '../typography'
import { CardContent } from '../ui/card'

import { ProjectDocumentData } from '@/prismicio-types'

type Props = Pick<ProjectDocumentData, 'name' | 'description'>

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <ReadingText asChild className="font-medium">
      <h1>{children}</h1>
    </ReadingText>
  ),
  paragraph: ({ children }) => (
    <Paragraph className="line-clamp-3 text-foreground">{children}</Paragraph>
  ),
}

export const Content: React.FC<Props> = ({ name, description }) => {
  return (
    <CardContent className="flex flex-col gap-2">
      <PrismicRichText field={name} components={components} />
      <PrismicRichText field={description} components={components} />
    </CardContent>
  )
}
