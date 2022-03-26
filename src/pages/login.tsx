import type { NextPage } from 'next'
import { useConnect } from 'wagmi'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { generateChallenge } from '../lens/authentication/generate-challenge'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()
  const [{ data, error }, connect] = useConnect()
  const { data: session }: any = useSession();

  if (session) {
    router.push('/dash')
  }

  const login = async (connector) => {
    try {
      const res: any = await connect(connector);
      const challenge = await generateChallenge(res.data?.account);
      const signer = await connector.getSigner();
      const signature = await signer.signMessage(challenge.data.challenge.text);
      
      // signin(verify and create user)
      const signinRes: any = await signIn('credentials', { address: res.data?.account, signature: signature, redirect: false });
      if (signinRes.error) {
        toast.error("Error signin");
      } else {
        router.push("/dash");
      }
    } catch (error: any) {
      toast(error?.message)
    }
  }

  useEffect(() => {
    if (error) {
      toast(error.message)
    }
  }, [error])

  return (
    <div>
      {data.connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => login(connector)}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
        </button>
      ))}
    </div>
  )
}

export default Login
