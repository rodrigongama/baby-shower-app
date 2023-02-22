import { useNotification } from '../../contexts'
import { LayoutPage, ShoppingCard } from '../../components'
import { giftList } from '../../enums'

import { Container, Grid } from './style'

const pageTitle = 'Lista de Presentes'

export function GiftList() {
  const { contextNotification } = useNotification()

  return (
    <LayoutPage page={pageTitle}>
      <Container>
        {contextNotification}

        <Grid>
          {giftList
            .filter((item) => item.showInCarousel)
            .map((gift) => (
              <ShoppingCard item={gift} key={gift.id} />
            ))}
        </Grid>
      </Container>
    </LayoutPage>
  )
}
