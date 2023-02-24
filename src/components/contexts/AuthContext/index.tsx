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
  const [isLogged, setIsLogged] = useState(false)
  const [at, setAt] = useState('')
  const [username, setUsername] = useState('')

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
    setUsername(userData.data?.username)
  }

  useEffect(() => {
    const rt = localStorage.getItem('buzzer_refreshToken')

    const getAT = async (rt: string | null) => {
      if (rt) {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BE_DOMAIN}/auth/refresh`,
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
          setIsLogged(true)
          getUserData(res.data?.access_token)
        } catch (error) {
          console.log(error)
        }
      }
    }

    getAT(rt)
  }, [])

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
      localStorage.removeItem('buzzer_refreshToken')
      setIsLogged(false)
      toast.success('Berhasil logout.')
    }
  }

  const contextValue = {
    loading,
    setLoading,
    isLogged,
    at,
    login,
    register,
    username,
    logout,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
