import type { NextPage } from 'next'
import Link from 'next/link'

// todo: landing page design

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/dash">
        <a>Launch Dapp</a>
      </Link>
    </div>
  )
}

export default Home
