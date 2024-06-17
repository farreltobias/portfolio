import { PrismicNextLink } from '@prismicio/next'
import type { JSXMapSerializer } from '@prismicio/react'

import { H1, H2, Paragraph } from '@/src/components/typography'
import { Button } from '@/src/components/ui/button'

export const components: JSXMapSerializer = {
  heading1: ({ children }) => <H1>{children}</H1>,
  heading2: ({ children }) => <H2>{children}</H2>,
  paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
  hyperlink: ({ children, node }) => (
    <Button asChild className="text-muted-foreground p-0 h-min" variant="link">
      <PrismicNextLink field={node.data}>{children}</PrismicNextLink>
    </Button>
  ),
}
