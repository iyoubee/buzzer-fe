import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Error, SpinElipse, Success } from '@icons'
import { Navbar } from '@elements'
import { AuthContextProvider } from '@contexts'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthContextProvider>
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
        <Head>
          <title>RISTEK MedSOS</title>
          <meta
            name="description"
            content="RISTEK MedSOS for oprec assignment"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-backgroundColor w-full min-h-screen flex justify-center pb-10">
          <div className=" min-h-screen max-w-[1440px] w-full items-center flex flex-col">
            <Navbar />
            <div className="md:w-1/2 w-full p-5 lg:p-0">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </AuthContextProvider>
    </>
  )
}
