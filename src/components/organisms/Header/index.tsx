import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import * as Icons from 'react-icons/ai'

import { Cart } from '../../../components/atoms'
import { logo } from '../../../assets'
import { useWindowSize } from '../../../hooks'

import { Container, ContainerMenuMobile, Content, Logo, Menu } from './style'

const items: MenuProps['items'] = [
  {
    label: <Link to='/'>Apresentação</Link>,
    icon: <Icons.AiOutlineUser />,
    key: '/',
  },
  {
    label: <Link to='/gift-list'>Lista de presentes</Link>,
    icon: <Icons.AiOutlineBook />,
    key: '/gift-list',
  },
  {
    label: <Link to='/messages'>Mensagens</Link>,
    icon: <Icons.AiOutlineMessage />,
    key: '/messages',
  },
  {
    label: <Link to='/confirmation'>Confirmação de Presença</Link>,
    icon: <Icons.AiOutlineCalendar />,
    key: '/confirmation',
  },
]

export function Header() {
  const location = useLocation()
  const { width } = useWindowSize()

  const [current, setCurrent] = useState('/')

  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key)

  useEffect(() => {
    setCurrent(location.pathname)
  }, [location])

  return (
    <>
      <Container>
        <Content>
          <Link to='/'>
            <Logo src={logo} alt='logo' />
          </Link>

          {width && width > 999 && (
            <>
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode='horizontal'
                items={items}
              />

              <Cart />
            </>
          )}
        </Content>
      </Container>

      {width && width < 999 && (
        <ContainerMenuMobile>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode='horizontal'
            items={items}
          />

          <Cart />
        </ContainerMenuMobile>
      )}
    </>
  )
}
