import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiProvider } from 'wagmi'
import { connectors } from '../lib/connectors'
import { Toaster } from 'react-hot-toast'
import { providers } from 'ethers'

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
