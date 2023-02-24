import { ReactNode } from 'react'

export interface CheckboxProps {
  children: ReactNode
  selected: boolean
  setSelected: React.Dispatch<React.SetStateAction<boolean>>
}
