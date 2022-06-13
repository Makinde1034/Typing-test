import React from 'react'
import type { AppProps } from 'next/app'

import Providers from '../Providers'
import { store } from '../state'
import Modal from '../components/Modal/Modal'
import Info from '../components/Info/Info'

import '../styles/app.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Providers store={store}>
      <Component {...pageProps} />
      <Modal />
      <Info />
    </Providers>
      
    </>
  )
}

export default MyApp
