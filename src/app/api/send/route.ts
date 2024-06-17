import { Resend } from 'resend'
import { z } from 'zod'

import NewMessage from '@/transactional/emails/new-message'

const resend = new Resend(process.env.RESEND_API_KEY)

const validationSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long.',
  }),
  email: z.string().email({
    message: 'Email must be a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters long.',
  }),
})

type ContactBody = z.infer<typeof validationSchema>

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody

  try {
    validationSchema.parse(body)
  } catch (error) {
    return Response.json({ error }, { status: 400 })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `${body.name} <dev@farrel.tech>`,
      to: 'dev@farrel.tech',
      subject: 'You have a new message!',
      react: NewMessage(body) as React.ReactElement,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
