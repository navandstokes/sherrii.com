import { useEffect } from 'react'
import App from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import api from 'api'
import { Navbar } from 'components/navbar'
import 'lib/index.css'
import 'lib/nprogress.css'

import NProgress from 'nprogress'

function MyApp({ Component, pageProps, menu }) {

  useEffect(() => {
    Router.events.on('routeChangeStart', url => {
      NProgress.inc()
    })
    Router.events.on('routeChangeError', () => {
      NProgress.done() 
    })
    Router.events.on('routeChangeComplete', url => {
      NProgress.done()
    })
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <Navbar items={menu} />
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const menu = await api.getEntries({
    content_type: `list`,
    order: 'fields.title'
  }).then(data => {
    return data.items
  })

  return { ...appProps, menu }
}

export default MyApp