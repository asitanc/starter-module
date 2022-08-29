import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import React from 'react'
import Layout from 'components/Layout'
import { Helmet } from 'react-helmet'
import styledNormalize from 'styled-normalize'
import Theme from '../src/styles/theme'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    line-height: 1.1;
  }

  body {
    font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }

  ul {
    padding-left: 0;
    li {
      list-style: none;
    }
  }
  
  h1,h2 {
    margin: 0px;
  }
`

export default function MyApp(props) {
  const { Component, pageProps: { session, ...pageProps } } = props
  const title = ""

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <div className='body-wrapper'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </>
  )
}
