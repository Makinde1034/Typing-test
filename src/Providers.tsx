import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'
import { Store } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

const Providers: React.FC<{ children: ReactNode; store: Store }> = ({ children, store }) => {
  return (
    <Provider store={store}>
      <SWRConfig>{children}</SWRConfig>
    </Provider>
  )
}

export default Providers
