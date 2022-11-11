import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import {SVGSource} from '../components/svg/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <SVGSource />
    </Layout>
  )
}
