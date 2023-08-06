import React, { createContext, useEffect, useState } from 'react'
import { User } from 'core/interfaces/User.interface'
import { useStorage } from 'core/hooks/useStorage'
import { USER_KEY } from 'core/constants/localStorageKeys'

interface UserContextState {
  user: User
}

interface UserContextActions {
  setUser: (user: User) => void
  setUserName: (name: string) => void
  setPhoneNumber: (phoneNumber: string) => void
}

type UserContextType = [state: UserContextState, actions: UserContextActions]

export const UserContext = createContext<UserContextType>({} as UserContextType)

interface UserProvider {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProvider> = ({ children }) => {
  const [user, updateUser] = useState<User>()
  const { getData } = useStorage()

  useEffect(() => {
    const user = getData<User>(USER_KEY) ?? {}
    if (user) updateUser({} as User)
  }, [])

  const setUser = (user: User) => {
    updateUser(user)
  }

  const setUserName = (name: string) => {
    updateUser((prevState) => ({ ...prevState, name }))
  }

  const setPhoneNumber = (phoneNumber: string) => {
    updateUser((prevState) => ({ ...prevState, phoneNumber }))
  }

  return (
    <UserContext.Provider
      children={children}
      value={[{ user }, { setUser, setUserName, setPhoneNumber }]}
    />
  )
}
