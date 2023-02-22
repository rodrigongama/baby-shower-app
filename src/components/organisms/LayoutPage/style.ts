import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
  max-width: 1295px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colorPrimary};
  font: normal normal 700 45px/40px 'Montserrat';
  margin-bottom: 45px;
  text-align: center;
`
