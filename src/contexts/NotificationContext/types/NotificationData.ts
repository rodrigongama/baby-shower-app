import { ReactElement } from 'react'

export interface NotificationData {
  contextNotification: ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >
  openNotification: (message: string, description: string) => void
}
