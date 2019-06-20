import React from 'react'
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

    const lists = await api.getEntries({
      content_type: `list`
    }).then(data => {
      return data.items
    })

    const about = {'fields': {'title': 'About', 'slug': 'about', 'pages': true}}
    const menu = lists.concat(about)

    return { pageProps, menu }
  }

  render() {
    const { Component, pageProps, menu } = this.props

    return (
      <Container>
        <Navbar items={menu} />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;