import type { AppProps } from "next/app"
import { type FC } from "react"

import "@/globals.css"
import Head from "next/head"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
