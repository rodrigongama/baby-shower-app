import { Badge } from "antd";
import { useCart } from "../../../contexts";
import { cart } from "../../../assets";

import theme from "../../../styles/theme";
import { CartContainer, Container } from "./style";

export function Cart() {
  const { shoppingCart, handleOpenCheckoutModal } = useCart();

  return (
    <Container onClick={handleOpenCheckoutModal}>
      <Badge
        count={shoppingCart.length}
        offset={[-3, 5]}
        color={theme.colorPrimary}
      >
        <CartContainer>
          <img src={cart} alt="Carrinho" />
        </CartContainer>
      </Badge>
    </Container>
  );
}
