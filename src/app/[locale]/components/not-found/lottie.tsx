'use client'

import Lottie, { LottieOptions } from 'lottie-react'

type Props = {
  animationData: JSON
} & LottieOptions

export const LottieAnimation: React.FC<Props> = ({
  animationData,
  ...props
}) => {
  return <Lottie animationData={animationData} {...props} />
}
