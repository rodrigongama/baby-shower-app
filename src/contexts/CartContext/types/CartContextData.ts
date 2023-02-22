import { Dispatch, ReactElement, SetStateAction } from 'react'
import { CartItem } from '.'

export type CartContextData = {
  shoppingCart: CartItem[]
  setShoppingCart: Dispatch<SetStateAction<CartItem[]>>
  addItemOnCart: (item: CartItem, quantity: number) => void
  removeItemOnCart: (id: number) => void
  isCheckoutModal: boolean
  handleOpenCheckoutModal: () => void
  handleCloseCheckoutModal: () => void
}
