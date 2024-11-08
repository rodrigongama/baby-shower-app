import { useNotification } from "../../contexts";
import {
  CarouselGifts,
  Information,
  MessageSection,
  Time,
} from "../../components";
import { shower } from "../../assets";

import { Container, WelcomeContainer, WelcomeText, Text } from "./style";

export function Home() {
  const { contextNotification } = useNotification();

  return (
    <Container>
      {contextNotification}

      <WelcomeContainer>
        <img src={shower} alt="Imagem do Chá" />

        <WelcomeText>
          <p>Olá, familiares e amigos!</p>
          <p>Esta é a lista de presentes da Susana.</p>
          <p>
            Estamos muito felizes e animados para celebrar a chegada da nossa
            pequena com vocês!
          </p>
          <br />
          <p>Com amor, Rodrigo, Thamires e Nathan.</p>
        </WelcomeText>

        <Text>A Deus toda glória!</Text>
      </WelcomeContainer>

      <Time />
      <CarouselGifts />
      <MessageSection />
      <Information />
    </Container>
  );
}
