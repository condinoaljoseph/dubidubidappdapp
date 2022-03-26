import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import type { AppProps } from 'next/app'
import { WagmiProvider } from 'wagmi'
import { connectors } from '../lib/connectors'
import { Toaster } from 'react-hot-toast'
import { providers } from 'ethers'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const provider = () =>
  new providers.JsonRpcProvider("https://rpc-mumbai.matic.today")

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect connectors={connectors} provider={provider}>
      <Component {...pageProps} />
      <Toaster />
    </WagmiProvider>
  )
}

export default MyApp
