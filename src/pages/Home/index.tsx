import { useNotification } from '../../contexts'
import { CarouselHome, Information, Time, Welcome } from '../../components'
import { Container } from './style'

export function Home() {
  const { contextNotification } = useNotification()

  return (
    <Container>
      {contextNotification}

      <Welcome />
      <Time />
      <CarouselHome />
      <Information />
    </Container>
  )
}
