export interface MessageCardProps {
  username?: string
  date: Date
  message?: string
  isAuthor?: boolean
  isCloseFriend?: boolean
  id: string
  setAllMessages: React.Dispatch<React.SetStateAction<never[]>>
}
