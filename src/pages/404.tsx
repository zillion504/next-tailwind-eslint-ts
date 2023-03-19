import Head from "next/head"
import React, { type FC } from "react"

const NotFound: FC = () => {
  return <div className="container">
    <p>Test</p>
  </div>
}

const Page: FC = () => {
  return (
    <>
      <Head>
      <title>App Name | Not found</title>
        <meta name="description" content="Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NotFound />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Page
