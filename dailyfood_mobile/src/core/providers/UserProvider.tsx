import React, { createContext, useEffect, useState } from 'react'
import { User } from 'core/interfaces/User.interface'
import { useStorage } from 'core/hooks/useStorage'
import { USER_KEY } from 'core/constants/localStorageKeys'

interface UserContextState {
  user: User
}

interface UserContextActions {
  setUser: (user: User) => void
}

type UserContextType = [state: UserContextState, actions: UserContextActions]

export const UserContext = createContext<UserContextType>({} as UserContextType)

interface UserProvider {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProvider> = ({ children }) => {
  const [user, updateUser] = useState<User>()
  const { setData, getData } = useStorage()

  useEffect(() => {
    const user = getData<User>(USER_KEY)
    if (user) updateUser(user)
  }, [])

  const setUser = (user: User) => {
    setData<User>(USER_KEY, user)
    updateUser(user)
  }

  return (
    <UserContext.Provider children={children} value={[{ user }, { setUser }]} />
  )
}
