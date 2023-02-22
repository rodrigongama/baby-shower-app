import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { MdOutlineContentCopy } from 'react-icons/md'
import { FooterCheckout, TotalPrice } from '../../../components'
import PIX from 'react-qrcode-pix'

import { useCart } from '../../../contexts'
import { formatPrice } from '../../../utils'
import { pix } from '../../../assets'

import { Price, Title } from '../../molecules/ShoppingCard/style'
import * as Styles from './style'

const now = new Date().getTime().toString()

export function ModalCheckout() {
  const {
    addItemOnCart,
    shoppingCart,
    setShoppingCart,
    isCheckoutModal,
    handleCloseCheckoutModal,
    removeItemOnCart,
  } = useCart()

  const [step, setStep] = useState(1)
  const [fullPIX, setFullPIX] = useState('')

  const isCartEmpty = shoppingCart.length === 0
  const totalPrice = shoppingCart.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0,
  )

  function handleSubmitCart() {
    if (step === 1) {
      setStep(2)
      return
    }

    handlResetCheckout()
  }

  function handlResetCheckout() {
    if (step === 2) setShoppingCart([])
    handleCloseCheckoutModal()
    setStep(1)
  }

  return (
    <Styles.Modal
      title='Meu carrinho'
      open={isCheckoutModal}
      onCancel={handlResetCheckout}
      width={450}
      footer={[
        <FooterCheckout
          step={step}
          isCartEmpty={isCartEmpty}
          handleCancel={handlResetCheckout}
          handleSubmitCart={handleSubmitCart}
        />,
      ]}
    >
      {isCartEmpty && <p>Você ainda não tem items no carrinho!</p>}

      {step === 1 && !isCartEmpty && (
        <>
          {shoppingCart.map((item) => (
            <Styles.CartItem key={item.id}>
              <img src={item.image} alt={item.name} />

              <Styles.Description>
                <Title>{item.name}</Title>
                <Price>{formatPrice(item.price)}</Price>

                <Styles.Quantity>
                  <Styles.MinusIcon
                    size={16}
                    disabled={item.quantity === 1}
                    onClick={() =>
                      item.quantity === 1 ? null : addItemOnCart(item, -1)
                    }
                  />

                  <span>{item.quantity}</span>

                  <AiOutlinePlusCircle
                    size={16}
                    onClick={() => addItemOnCart(item, 1)}
                  />
                </Styles.Quantity>
              </Styles.Description>

              <BiTrash
                color='#EFA389'
                size={20}
                onClick={() => removeItemOnCart(item.id)}
              />
            </Styles.CartItem>
          ))}

          <TotalPrice totalPrice={totalPrice} />
        </>
      )}

      {step === 2 && (
        <>
          <Styles.PixContainer>
            <Styles.PixTitle>Pague com</Styles.PixTitle>

            <Styles.PixSubtitle>
              <img src={pix} alt='Logo PIX' />
              <span>PIX</span>
            </Styles.PixSubtitle>

            <Styles.PixContent>
              <PIX
                amount={totalPrice}
                pixkey='86b81071-df99-451c-9631-cb1b297a0b37'
                merchant='Thamires Gama'
                city='Rio de Janeiro'
                cep='22780-070'
                code={'RQP' + now}
                onLoad={setFullPIX}
                resize={250}
                variant='fluid'
                padding={30}
                color='#ac897e'
                bgRounded
                divider
              />

              <Styles.Instruction>
                Aponte sua câmera para o qr code <br /> ou use o modo pix copia
                e cola no aplicativo do seu banco:
              </Styles.Instruction>

              <Styles.PixCode>
                <span>Copiar código PIX</span>

                <MdOutlineContentCopy
                  size={25}
                  onClick={() => navigator.clipboard.writeText(fullPIX)}
                />
              </Styles.PixCode>
            </Styles.PixContent>
          </Styles.PixContainer>

          <TotalPrice totalPrice={totalPrice} />
        </>
      )}
    </Styles.Modal>
  )
}
