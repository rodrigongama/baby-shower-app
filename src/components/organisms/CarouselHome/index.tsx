import { Carousel } from 'antd'
import { giftList } from '../../../enums'
import { ShoppingCard } from '../../../components'

import { Container, Link, Title } from './style'

const props = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
}

export function CarouselHome() {
  return (
    <Container>
      <Title>Lista de presentes</Title>

      <Carousel {...props}>
        {giftList
          .filter((item) => item.showInCarousel)
          .map((gift) => (
            <ShoppingCard item={gift} key={gift.id} />
          ))}
      </Carousel>

      <Link to='/gift-list'>Ver toda a lista de presente</Link>
    </Container>
  )
}
