import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiProvider } from 'wagmi'
import { connectors } from '../lib/connectors'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect connectors={connectors}>
      <Component {...pageProps} />
      <Toaster />
    </WagmiProvider>
  )
}

export default MyApp
