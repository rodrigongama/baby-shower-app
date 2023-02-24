import styled, { css } from 'styled-components'
import { Button } from 'antd'
import { ButtonProps } from './types'

export const BaseButton = styled(Button)<ButtonProps>`
  font: normal normal 400 1.3rem 'Open Sans';
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 100%;

  &.ant-btn-link span {
    color: ${({ theme }) => theme.colorPrimary};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colorPrimary};
      text-decoration: none;
    }
  }

  ${({ icon }) =>
    icon &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 32px;
        width: 32px;
      }
    `}

  ${({ isPurchased }) =>
    isPurchased &&
    css`
      background: #00b7ac;

      &:hover {
        background-color: #00d9cc !important;
      }
    `}
`
