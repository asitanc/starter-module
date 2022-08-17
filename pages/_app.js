import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import Layout from 'components/Layout'
import { Helmet } from 'react-helmet'

export default function MyApp(props) {
  const { Component, pageProps: { session, ...pageProps } } = props
  const title = ""

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className='body-wrapper'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}
