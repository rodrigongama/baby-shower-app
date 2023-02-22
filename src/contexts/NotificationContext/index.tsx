import { createContext, useContext } from 'react'
import { notification } from 'antd'
import { NotificationData, NotificationProviderProps } from './types'

const NotificationContext = createContext({} as NotificationData)

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [api, contextNotification] = notification.useNotification()

  const openNotification = (message: string, description: string) => {
    api.success({
      message,
      description,
      placement: 'topRight',
    })
  }

  return (
    <NotificationContext.Provider
      value={{ contextNotification, openNotification }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)
