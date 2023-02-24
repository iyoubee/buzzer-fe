import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextProps, ContextProviderProps } from './interface'

const AuthContext = createContext({} as AuthContextProps) // TODO: Declare interface of contextValue

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [at, setAt] = useState('')

  useEffect(() => {
    const rt = localStorage.getItem('buzzer_refreshToken')

    const getAT = async (rt: string | null) => {
      if (rt) {
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BE_DOMAIN}/auth/refresh`,
            { rt }
          )
          localStorage.setItem('buzzer_refreshToken', res.data?.refresh_token)
          setAt(res.data?.access_token)
          setIsLogged(true)
        } catch (error) {
          console.log(error)
        }
      }
    }

    getAT(rt)
  }, [])

  const login = async (username: string, password: string) => {
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
    } catch (error) {
      console.log(error)
    }
  }

  const contextValue = {
    loading,
    setLoading,
    isLogged,
    at,
    login,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
