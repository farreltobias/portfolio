'use server'

type FormValues = {
  name: string
  email: string
  message: string
}

export async function sendEmail(values: FormValues) {
  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send`, {
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
