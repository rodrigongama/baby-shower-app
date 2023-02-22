import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const WelcomeText = styled.div`
  color: #b08d83;
  font: normal normal 400 18px/32px 'Montserrat';
  max-width: 600px;
  text-align: center;
`
export const Text = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  font: normal normal 700 20px/40px 'Montserrat';
  margin-top: 30px;
  text-align: center;
`
