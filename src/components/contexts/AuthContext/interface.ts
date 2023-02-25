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
  closeFriends: any[]
  getAllMessages: () => Promise<any>
  id: number | undefined
  getAllUser: () => Promise<any>
  connectCloseFriends: (closeFriendsId: number) => Promise<void>
  disconnectCloseFriends: (closeFriendsId: number) => Promise<void>
  refreshCloseFriend: () => Promise<void>
  getMessages: (username: string) => Promise<any>
  editMessage: (message: string, messageId: string) => Promise<void>
  deleteMessage: (messageId: string) => Promise<void>
}
