import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Error, SpinElipse, Success } from '@icons'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: '',
          style: {
            background: '#363636',
            color: '#fff',
          },
          loading: {
            style: {
              fontFamily: 'Poppins',
              background: '#2F7A84',
              border: '2px solid #6DB8C2',
              color: '#F3E2CE',
            },
            icon: <SpinElipse />,
          },
          success: {
            style: {
              fontFamily: 'PoppinsBold',
              background: '#A3AA10',
              border: '2px solid #C7CC70',
              color: '#F4EFD3',
            },
            icon: <Success />,
          },
          error: {
            style: {
              fontFamily: 'PoppinsBold',
              background: '#A33233',
              border: '2px solid #CA5355',
              color: '#F4EFD3',
            },
            icon: <Error />,
          },
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
