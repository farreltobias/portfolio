'use client'

import { useRouter } from 'next/navigation'

import { ArrowLeft } from '@phosphor-icons/react'

import { Button } from '@/src/components/ui/button'

export const ReturnButton: React.FC = () => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.back()}
      variant="secondary"
      size="icon"
      className="absolute z-10 top-6 left-6 shadow-lg"
    >
      <ArrowLeft size={20} />
    </Button>
  )
}
