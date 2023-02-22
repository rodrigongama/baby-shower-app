import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'

import { logo } from '../../../assets'
import { Cart } from '../../../components/atoms'

import { Container, Content, Menu } from './style'

const items: MenuProps['items'] = [
  {
    label: <Link to='/'>Apresentação</Link>,
    key: '/',
  },
  {
    label: <Link to='/gift-list'>Lista de presentes</Link>,
    key: '/gift-list',
  },
]

export function Header() {
  const location = useLocation()

  const [current, setCurrent] = useState('/')

  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key)

  useEffect(() => {
    setCurrent(location.pathname)
  }, [location])

  return (
    <Container>
      <Content>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>

        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
        />

        <Cart />
      </Content>
    </Container>
  )
}
