import styled from "styled-components";

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.headerHeight};
  padding: 30px 10px 50px;
  width: 100%;

  @media (max-width: 999px) {
    margin-bottom: 30px;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const WelcomeText = styled.div`
  color: #b08d83;
  font: normal normal 400 1.8rem/3.2rem "Montserrat";
  max-width: 600px;
  text-align: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colorPrimary};
  font: normal normal 700 2rem/4rem "Montserrat";
  margin-top: 30px;
  text-align: center;
`;
