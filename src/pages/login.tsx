import type { NextPage } from 'next'
import { useConnect } from 'wagmi'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import MainLayout from '../components/MainLayout'
import { generateChallenge } from '../lens/authentication/generate-challenge'
import { authenticate } from '../lens/authentication/authenticate'

const Login: NextPage = () => {
  const [{ data, error }, connect] = useConnect()

  const login = async (connector) => {
    try {
      const res = await connect(connector);
      const challenge = await generateChallenge(res.data?.account);
      const signer = await connector.getSigner();
      const signature = await signer.signMessage(challenge.data.challenge.text);
      const accessTokens = await authenticate(res.data?.account, signature);
      console.log(accessTokens)
    } catch (error) {
      toast(error)
    }
  }

  useEffect(() => {
    if (error) {
      toast(error.message)
    }
  }, [error])

  return (
    <MainLayout>
      <p>Login with</p>
      {data.connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => login(connector)}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
        </button>
      ))}
    </MainLayout>
  )
}

export default Login
