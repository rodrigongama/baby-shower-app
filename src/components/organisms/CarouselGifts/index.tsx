import { Carousel } from 'antd'
import { carouselProps, giftList } from '../../../enums'
import { ShoppingCard } from '../..'

import { Container, Link, Title } from './style'

export function CarouselGifts() {
  return (
    <Container>
      <Title>Lista de presentes</Title>

      <Carousel {...carouselProps}>
        {giftList
          .filter((item) => item.showInCarousel)
          .map((gift) => (
            <ShoppingCard item={gift} key={gift.id} />
          ))}
      </Carousel>

      <Link to='/gift-list'>Ver toda a lista de presentes</Link>
    </Container>
  )
}
