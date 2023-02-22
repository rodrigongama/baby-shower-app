import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ConfigProvider } from 'antd'

import theme from './styles/theme'
import GlobalStyle from './styles/global'

import { GiftList, Home } from './pages'
import { Header, ModalCheckout } from './components'
import { CartProvider, NotificationProvider } from './contexts'

import '@fontsource/open-sans'
import '@fontsource/montserrat'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={{ token: theme }}>
        <NotificationProvider>
          <CartProvider>
            <BrowserRouter>
              <Header />
              <ModalCheckout />

              <Routes>
                <Route path='/' element={<Home />} index />
                <Route path='/gift-list' element={<GiftList />} />
              </Routes>
            </BrowserRouter>

            <GlobalStyle />
          </CartProvider>
        </NotificationProvider>
      </ConfigProvider>
    </ThemeProvider>
  )
}
