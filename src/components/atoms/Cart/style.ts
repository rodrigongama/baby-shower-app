import styled from 'styled-components'

export const Container = styled.div`
  height: 55px;
`

export const CartContainer = styled.div`
  background: ${({ theme }) => theme.colorLightSecondary};
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
`
