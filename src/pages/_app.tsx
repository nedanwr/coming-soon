import type { AppProps } from 'next/app'
import '../styles/globals.scss'

function Main({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default Main;
