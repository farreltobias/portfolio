'use server'

type FormValues = {
  name: string
  email: string
  message: string
}

const baseURL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export async function sendEmail(values: FormValues) {
  await fetch(`${baseURL}/api/send`, {
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
