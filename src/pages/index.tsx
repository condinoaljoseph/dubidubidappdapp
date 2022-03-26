import type { NextPage } from 'next'
import Link from 'next/link'

// todo: landing page design

const Home: NextPage = () => {
  return (
    <div>
      <h1>DubiDubiDappDapp</h1>
      <Link href="/dash">
        <a className="bg-cyan-500">Launch Dapp</a>
      </Link>
    </div>
  )
}

export default Home
