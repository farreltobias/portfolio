import { createContext, useContext, useState } from 'react'
import { DateRange } from 'react-day-picker'

type FilterContextType = {
  filter: string
  setFilter: (filter: string) => void
  techsFilter: string[]
  setTechsFilter: (techs: string[]) => void
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
}

const FIlterContext = createContext<FilterContextType>({
  filter: '',
  setFilter: () => {},
  techsFilter: [],
  setTechsFilter: () => {},
  date: undefined,
  setDate: () => {},
})

export const FilterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [filter, setFilter] = useState<string>('')
  const [techsFilter, setTechsFilter] = useState<string[]>([])

  const [date, setDate] = useState<DateRange | undefined>()

  return (
    <FIlterContext.Provider
      value={{
        filter,
        setFilter,
        techsFilter,
        setTechsFilter,
        date,
        setDate,
      }}
    >
      {children}
    </FIlterContext.Provider>
  )
}

export const useFilter = () => useContext(FIlterContext)
