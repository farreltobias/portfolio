import { Logo } from '@/src/components/logo'
import '@/src/styles/globals.css'

import config from '../tailwind.config'

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface NewMessageProps {
  name?: string
  email?: string
  message?: string
}

export const NewMessage = ({ name, email, message }: NewMessageProps) => {
  const previewText = `Read ${name}'s message`

  return (
    <Html className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&family=Kalam:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>{previewText}</Preview>

      <Tailwind config={config}>
        <Body className="font-heebo text-[hsl(180_1%_23%)] bg-[hsl(hsl(262_42%_93%))]">
          <Container className="mx-auto pt-5 pb-12 w-[580px] max-w-full">
            <Section>
              <Logo className="fill-[hsl(180_1%_23%)]" />
            </Section>
            <Section className="pb-5">
              <Row>
                <Text className="text-lg mb-2 font-kalam">Hey Farrel!</Text>
                <Text className="text-3xl font-bold mt-0 mb-8">
                  You have a new message from {name}
                </Text>

                <Text className="text-lg font-kalam">Here's what {name} wrote:</Text>

                <Text className="text-lg p-6 bg-[hsl(260_24%_85%)] rounded-md">
                  {message}
                </Text>
                <Text className="text-lg pb-4">
                  You can respond to {name} by replying to this email. Click the
                  button below to get started. The email will be sent directly
                  to {name} {`<${email}>`}
                </Text>

                <Button
                  className="bg-[hsl(268_59%_60%)] rounded-sm text-[hsl(180_1%_23%)] text-lg py-5 decoration-transparent text-center w-full"
                  href={`mailto:${email}`}
                >
                  Respond to {name}
                </Button>
              </Row>
            </Section>

            <Hr className="bg-[hsl(180_1%_23%)] my-5" />

            <Section>
              <Row>
                <Text className="text-sm mb-2">
                  Farrel.tech. 488, Rua Colombo, Cornélio Procópio, PR 86300000
                </Text>
                <Link href="https://farrel.tech" className="text-sm underline">
                  Check out my portfolio
                </Link>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

NewMessage.PreviewProps = {
  name: 'Alex',
  email: 'alex@email.com',
  message: `Alan was a great guest! Easy communication, the apartment was left
    in great condition, very polite, and respectful of all house rules.
    He’s welcome back anytime and would easily recommend him to any
    host!`,
} as NewMessageProps

export default NewMessage
