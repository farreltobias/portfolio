'use server'

import { host } from '@/src/locale-config'

type FormValues = {
  name: string
  email: string
  message: string
}

export async function sendEmail(values: FormValues) {
  await fetch(`${host}/api/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })

  return {
    message: 'Email sent',
  }
}
