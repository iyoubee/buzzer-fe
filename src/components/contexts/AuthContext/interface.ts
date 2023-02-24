import { ReactNode } from 'react'

export interface ContextProviderProps {
  children: ReactNode
}

export interface AuthContextProps {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isLogged: boolean
  at: string
  login: (username: string, password: string) => Promise<void>
  username: string
  logout: () => Promise<void>
}
