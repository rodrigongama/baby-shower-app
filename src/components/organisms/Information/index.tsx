import { FormEvent, useState } from 'react'
import { Button, Card, Input } from '../../../components'
import { AiOutlineSmile } from 'react-icons/ai'
import { BiCalendarCheck } from 'react-icons/bi'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { TfiLocationPin } from 'react-icons/tfi'

import { useNotification } from '../../../contexts'
import { addDoc, getDbRef } from '../../../firebase'
import { Confirmation } from './types'

import * as Styles from './styles'

export function Information() {
  const { openNotification } = useNotification()

  const [confirmation, setConfirmation] = useState({} as Confirmation)
  const [error, setError] = useState(false)

  const confirmationButtonError = error && !confirmation.answer

  function handleConfirmationAnswer(answer: string) {
    setConfirmation((prevState) => ({ ...prevState, answer }))
  }

  function handleTypeButton(answer: string) {
    return answer === confirmation.answer ? 'primary' : 'default'
  }

  function handleNotificationMessage(answer: string) {
    let message = 'Oba! Nos vemos dia 18/3.'

    if (answer === 'não') message = 'Ah, que pena!'
    if (answer === 'não sei') message = 'Ok, aguardo sua confirmação!'

    return message
  }

  async function handleConfirmationPresence(ev: FormEvent, data: Confirmation) {
    ev.preventDefault()

    if (!data.name || !data.answer) {
      setError(true)
      return
    }

    const dbRef = getDbRef('confirmation-list')

    try {
      await addDoc(dbRef, data)

      openNotification(
        'Confirmação adicionada',
        handleNotificationMessage(data.answer),
      )
    } catch (error) {
      console.log(error)
    }

    setConfirmation({ name: '', answer: '' })
    setError(false)
  }

  return (
    <Styles.Container>
      <Styles.DateContainer>
        <Styles.Title>Informações do chá de bebê</Styles.Title>

        <Styles.TimeDisplay>
          <p>Março</p>

          <Styles.TimeContainer>
            <Styles.TimeContent>Sábado</Styles.TimeContent>

            <span>18</span>

            <Styles.TimeContent>às 15h</Styles.TimeContent>
          </Styles.TimeContainer>

          <p>2023</p>
        </Styles.TimeDisplay>
      </Styles.DateContainer>

      <Card>
        <Styles.ContentCard>
          <Styles.ConfirmationContainer
            onSubmit={(ev) => handleConfirmationPresence(ev, confirmation)}
          >
            <p>
              <BiCalendarCheck /> Confirmação de Presença
            </p>

            <Input
              status={error && !confirmation.name ? 'error' : ''}
              placeholder='Nome'
              name='name'
              value={confirmation.name}
              exec={setConfirmation}
            />

            <Styles.ButtonsConfirmationContainer>
              <Button
                type={handleTypeButton('sim')}
                icon={<AiOutlineSmile />}
                onClick={() => handleConfirmationAnswer('sim')}
                danger={confirmationButtonError}
              >
                Claro que eu vou
              </Button>

              <Button
                type={handleTypeButton('não')}
                icon={<HiOutlineEmojiSad />}
                onClick={() => handleConfirmationAnswer('não')}
                danger={confirmationButtonError}
              >
                Desculpa, não vou
              </Button>

              <Button
                type={handleTypeButton('não sei')}
                icon={<BsEmojiSmileUpsideDown />}
                onClick={() => handleConfirmationAnswer('não sei')}
                danger={confirmationButtonError}
              >
                Ainda não sei
              </Button>
            </Styles.ButtonsConfirmationContainer>

            <Button htmlType='submit' type='link'>
              Enviar confirmação
            </Button>
          </Styles.ConfirmationContainer>

          <Styles.AddresContainer>
            <Styles.Address>
              <TfiLocationPin />

              <div>
                <p>Estrada de Camorim, 1003</p>
                <p>Salão do Valley</p>
              </div>
            </Styles.Address>

            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.452502157728!2d-43.425123484909804!3d-22.970382145918435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdc1691e407c1%3A0x60164d0d51530464!2sEstr.%20de%20Camorim%2C%201003%20-%20Jacarepagu%C3%A1%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022780-070!5e0!3m2!1spt-BR!2sbr!4v1676645871805!5m2!1spt-BR!2sbr'
              width='600'
              height='450'
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </Styles.AddresContainer>
        </Styles.ContentCard>
      </Card>
    </Styles.Container>
  )
}
