import styled from 'styled-components'
import { Menu as BaseMenu } from 'antd'

export const Container = styled.header`
  background: ${({ theme }) => theme.colorTerciary};
  padding: 0 15px;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1265px;
`

export const Menu = styled(BaseMenu)`
  background: transparent;
  border: none;
  flex: 1;
  padding-left: 50px;

  li {
    color: #584540;
    font: normal normal 400 16px/25px 'Open Sans';
    padding-bottom: 25px;

    &.ant-menu-item-selected {
      span {
        color: #584540;
        font-weight: 700;
      }
    }

    &.ant-menu-item-selected::after,
    &.ant-menu-item-active::after {
      border-bottom-color: ${({ theme }) => theme.colorPrimary} !important;
      border-bottom-width: 5px !important;
    }
  }
`
