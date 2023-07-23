import React, { createContext, useMemo } from 'react'
import { MMKV } from 'react-native-mmkv'

interface StorageProviderProviderActions {
  getData: <T = unknown>(key: string) => T
  setData: <T = unknown>(key: string, data: T) => void
}

export const StorageProviderContext =
  createContext<StorageProviderProviderActions>(
    {} as StorageProviderProviderActions,
  )

interface StorageProviderProviderProps {
  children: React.ReactNode
}

export const StorageProviderProvider: React.FC<
  StorageProviderProviderProps
> = ({ children }) => {
  const storage = useMemo(() => new MMKV({ id: 'dailyfood' }), [])

  function getData<T = unknown>(key: string): T {
    const data = storage.getString(key)
    return JSON.parse(data)
  }

  function setData<T = unknown>(key: string, data: T) {
    const dataAsString = JSON.stringify(data)
    storage.set(key, dataAsString)
  }

  return (
    <StorageProviderContext.Provider
      children={children}
      value={{
        getData,
        setData,
      }}
    />
  )
}
