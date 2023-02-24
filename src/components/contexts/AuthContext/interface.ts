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
  register: (email: string, username: string, password: string) => Promise<void>
  username: string
  logout: () => Promise<void>
  sendPublicMessage: (message: string) => Promise<void>
  sendPrivateMessage: (message: string) => Promise<void>
  closeFriends: number[] | undefined
  getAllMessages: () => Promise<any>
}
