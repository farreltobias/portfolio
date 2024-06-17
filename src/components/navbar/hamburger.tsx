import { motion, Transition, Variants } from 'framer-motion'

const topVariants: Variants = {
  open: {
    rotate: 45,
    marginBottom: 9,
    marginLeft: 10,
  },
  closed: {
    rotate: 0,
    marginBottom: 4,
  },
}

const middleVariants: Variants = {
  open: {
    height: 0,
    marginLeft: 10,
  },
  closed: {
    height: 3,
  },
}

const bottomVariants: Variants = {
  open: {
    rotate: -45,
    marginLeft: 10,
  },
  closed: {
    rotate: 0,
  },
}

const transition: Transition = {
  backgroundColor: { duration: 0.2 },
  rotate: { type: 'spring', stiffness: 500, damping: 20 },
  marginBottom: { duration: 0.2 },
  height: { duration: 0.15 },
}

type Props = {
  show: boolean
}

export const Hamburger: React.FC<Props> = ({ show }) => {
  return (
    <>
      <motion.div
        className="w-6 h-[0.1875rem] origin-top-left rounded-sm bg-foreground"
        transition={transition}
        variants={topVariants}
        initial="closed"
        animate={show ? 'open' : 'closed'}
      />
      <motion.div
        className="w-6 mb-1 rounded-sm bg-foreground"
        transition={transition}
        variants={middleVariants}
        initial="closed"
        animate={show ? 'open' : 'closed'}
      />
      <motion.div
        className="w-6 h-[0.1875rem] origin-bottom-left rounded-sm bg-foreground"
        transition={transition}
        variants={bottomVariants}
        initial="closed"
        animate={show ? 'open' : 'closed'}
      />
    </>
  )
}
