import type { NextPage } from 'next'
import { useConnect } from 'wagmi'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import MainLayout from '../components/MainLayout'

const Login: NextPage = () => {
  const [{ data, error }, connect] = useConnect()

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
          onClick={() => connect(connector)}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
        </button>
      ))}
    </MainLayout>
  )
}

export default Login
