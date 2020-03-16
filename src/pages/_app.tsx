import React from "react"
import Head from "next/head"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "styles/index.css"

interface Props {
  Component: React.ComponentType
  pageProps: {}
}

const App: React.FC<Props> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <ToastContainer autoClose={3000} />
    <Component {...pageProps} />
  </>
)

export default App
