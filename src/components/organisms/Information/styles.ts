import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 100px auto 40px;
  max-width: 950px;
`

export const DateContainer = styled.div`
  max-width: 800px;
  padding-bottom: 60px;
  width: 100%;
`

export const Title = styled.h2`
  color: #ac897e;
  font: normal normal 700 18px 'Montserrat';
  text-align: center;
`

export const TimeDisplay = styled.div`
  color: #584540;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  padding: 20px 0;

  p {
    font: normal normal 400 18px 'Montserrat';
  }
`

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: normal normal 700 24px 'Montserrat';
  width: 100%;
`

export const TimeContent = styled.div`
  border: 2px solid ${({ theme }) => theme.colorPrimary};
  border-width: 2px 0;
  padding: 5px 0;
  text-align: center;
  text-transform: uppercase;
  width: 350px;
`

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const AddresContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;

  iframe {
    border: none;
  }
`

export const Address = styled.address`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;
  text-align: center;

  img {
    margin-right: 5px;
  }

  p {
    color: ${({ theme }) => theme.colorSecondary};
    font: normal normal 400 18px 'Montserrat';
  }
`
