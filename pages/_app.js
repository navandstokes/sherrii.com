import { Fragment, useEffect } from 'react'
import App from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import api from '../api'
import { Navbar } from '../components/navbar'
import '../lib/index.css'

import NProgress from 'nprogress'


function MyApp({ Component, pageProps, menu }) {

  useEffect(() => {
    Router.events.on('routeChangeStart', url => {
      NProgress.inc()
      // NTrans.start()
    })
    Router.events.on('routeChangeError', () => {
      NProgress.done() 
      // NTrans.done()
    })
    Router.events.on('routeChangeComplete', url => {
      NProgress.done()
      // NTrans.done(bgColor)
      gtag.pageview(url)
    })
  }, [])

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <Navbar items={menu} />
      <Component {...pageProps} />
    </Fragment>
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