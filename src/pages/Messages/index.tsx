import { LayoutPage, MessageCard } from '../../components'
import { useMessage } from '../../contexts'

import { Container, Grid } from './style'

const pageTitle = 'Mensagens'

export function Messages() {
  const { messages } = useMessage()

  return (
    <LayoutPage page={pageTitle}>
      <Container>
        <Grid>
          {messages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </Grid>
      </Container>
    </LayoutPage>
  )
}
