import React, { ReactNode } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav/Nav'
import styles from './Layout.module.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
          <Nav />
        </header>
        {children}
      </div>
    </div>
  )
}

export default Layout
