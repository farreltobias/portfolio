import { useFormatter } from 'next-intl'

import { DateField } from '@prismicio/client'

type Props = {
  startDate: DateField
  endDate: DateField
  formatter: ReturnType<typeof useFormatter>
}

const capitalizeAndRemovePeriods = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).replaceAll('.', '')

export const formatProjectDate = ({
  startDate: startDatePrismic,
  endDate: endDatePrismic,
  formatter: { dateTime },
}: Props) => {
  if (!startDatePrismic || !endDatePrismic) return ''

  const startDate = new Date(startDatePrismic)
  const endDate = new Date(endDatePrismic)

  const startMonth = capitalizeAndRemovePeriods(
    dateTime(startDate, { month: 'short' }),
  )
  const endMonth = capitalizeAndRemovePeriods(
    dateTime(endDate, { month: 'short' }),
  )

  const startYear = dateTime(startDate, { year: 'numeric' })
  const endYear = dateTime(endDate, { year: 'numeric' })

  const isSameYear = startYear === endYear
  const isSameMonth = startMonth === endMonth

  if (isSameYear && isSameMonth) {
    return `${startMonth} ${startYear}`
  }

  if (isSameYear) {
    return `${startMonth} - ${endMonth} ${startYear}`
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
}
