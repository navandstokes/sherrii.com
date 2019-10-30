import React from 'react'
import Head from 'react/head'
import App, { Container } from 'next/app'
import api from '../api'
import { Navbar } from '../components/navbar'
import '../static/index.css'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const menu = await api.getEntries({
      content_type: `list`,
      order: 'fields.title'
    }).then(data => {
      return data.items
    })

    return { pageProps, menu }
  }

  render() {
    const { Component, pageProps, menu } = this.props

    return (
      <Container>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
        </Head>
        <Navbar items={menu} />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;