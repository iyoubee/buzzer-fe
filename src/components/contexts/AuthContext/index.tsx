import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { AuthContextProps, ContextProviderProps } from './interface'

const AuthContext = createContext({} as AuthContextProps) // TODO: Declare interface of contextValue

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState<number>()
  const [isLogged, setIsLogged] = useState(false)
  const [at, setAt] = useState('')
  const [username, setUsername] = useState('')
  const [closeFriends, setCloseFriends] = useState<any[]>([])

  const getUserData = async (at: string) => {
    const userData = await axios.get(
      `${process.env.NEXT_PUBLIC_BE_DOMAIN}/auth/getUser`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + at,
        },
      }
    )
    console.log('context', userData)
    setUsername(userData.data?.username)
    setId(userData.data?.id)
    setCloseFriends(userData.data?.closeFriending)
  }

  const refreshCloseFriend = async () => {
    const userData = await axios.get(
      `${process.env.NEXT_PUBLIC_BE_DOMAIN}/auth/getUser`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + at,
        },
      }
    )
    setCloseFriends(userData.data?.closeFriending)
  }

  const getAllMessages = async () => {
    if (isLogged) {
      const userData = await axios.get(
        `${process.env.NEXT_PUBLIC_BE_DOMAIN}/user/getMessageAuth`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer ' + at,
          },
        }
      )
      return userData.data
    } else {
      const userData = await axios.get(
        `${process.env.NEXT_PUBLIC_BE_DOMAIN}/user/getMessage`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      return userData.data
    }
  }

  const getAllUser = async () => {
    if (at) {
      const userData = await axios.get(
        `${process.env.NEXT_PUBLIC_BE_DOMAIN}/user/getUser/`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer ' + at,
          },
        }
      )
      return userData.data
    }
  }

  const login = async (username: string, password: string) => {
    const id = toast.loading('Loading...')
    const params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BE_DOMAIN}/auth/local/signin/`,
        params,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      localStorage.setItem('buzzer_refreshToken', res.data?.refresh_token)
      setAt(res.data?.access_token)
      setIsLogged(true)
      getUserData(res.data?.access_token)
      toast.success('Berhasil login.', { id: id })
    } catch (error) {
      toast.error('Ada masalah.', { id: id })
      console.log(error)
    }
  }

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    const id = toast.loading('Loading...')
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('username', username)
    params.append('password', password)
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BE_DOMAIN}/auth/local/signup/`,
        params,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      localStorage.setItem('buzzer_refreshToken', res.data?.refresh_token)
      setAt(res.data?.access_token)
      setIsLogged(true)
      getUserData(res.data?.access_token)
      toast.success('Berhasil register.', { id: id })
    } catch (error) {
      toast.error('Ada masalah.', { id: id })
      console.log(error)
    }
  }

  const logout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BE_DOMAIN}/auth/logout`,
      {},
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + at,
        },
      }
    )
    if (res.data) {
      setId(undefined)
      setAt('')
      setUsername('')
      setCloseFriends([])
      localStorage.removeItem('buzzer_refreshToken')
      setIsLogged(false)
      toast.success('Berhasil logout.')
    }
  }

  const sendPublicMessage = async (message: string) => {
    const id = toast.loading('Loading...')
    const params = new URLSearchParams()
    params.append('message', message)
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BE_DOMAIN}/user/post/message/public`,
        params,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer ' + at,
          },
        }
      )
      toast.success('Berhasil post.', { id: id })
    } catch (error) {
      toast.error('Ada masalah.', { id: id })
      console.log(error)
    }
  }

  const sendPrivateMessage = async (message: string) => {
    const id = toast.loading('Loading...')
    const params = new URLSearchParams()
    params.append('message', message)
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BE_DOMAIN}/user/post/message/private`,
        params,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Bearer ' + at,
          },
        }
      )
      toast.success('Berhasil post.', { id: id })
    } catch (error) {
      toast.error('Ada masalah.', { id: id })
      console.log(error)
    }
  }

  const connectCloseFriends = async (closeFriendsId: number) => {
    const id = toast.loading('Loading...')
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BE_DOMAIN}/user/closeFriends/connect`,
        { closeFriendsId: closeFriendsId },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + at,
          },
        }
      )
      refreshCloseFriend()
      toast.success('Berhasil ubah.', { id: id })
    } catch (error) {
      toast.error('Ada masalah.', { id: id })
      console.log(error)
    }
  }

  const disconnectCloseFriends = async (closeFriendsId: number) => {
    const id = toast.loading('Loading...')
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BE_DOMAIN}/user/closeFriends/disconnect`,
        { closeFriendsId: closeFriendsId },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + at,
          },
        }
      )
      refreshCloseFriend()
      toast.success('Berhasil ubah.', { id: id })
    } catch (error) {
      toast.error('Ada masalah.', { id: id })
      console.log(error)
    }
  }

  useEffect(() => {
    const rt = localStorage.getItem('buzzer_refreshToken')

    const getAT = async (rt: string | null) => {
      if (rt) {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BE_DOMAIN}/auth/refresh/`,
            {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Bearer ' + rt,
              },
            }
          )
          localStorage.setItem('buzzer_refreshToken', res.data?.refresh_token)
          setAt(res.data?.access_token)
          getUserData(res.data?.access_token)
          setIsLogged(true)
        } catch (error) {
          console.log(error)
        }
      }
    }

    getAT(rt)
  }, [])

  const contextValue = {
    loading,
    setLoading,
    isLogged,
    at,
    login,
    register,
    username,
    logout,
    sendPublicMessage,
    sendPrivateMessage,
    closeFriends,
    getAllMessages,
    id,
    getAllUser,
    connectCloseFriends,
    disconnectCloseFriends,
    refreshCloseFriend,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
