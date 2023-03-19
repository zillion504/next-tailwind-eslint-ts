import Head from "next/head"
import React, { type FC } from "react"

const Index: FC = () => {
  return <div className="container">
    <p>Test</p>
  </div>
}

const Page: FC = () => {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name="description" content="App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Index />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Page
