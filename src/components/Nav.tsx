import Link from "next/link"
import { useAccount } from "wagmi"

const Nav = () => {
  const [{ data }, disconnect] = useAccount({
    fetchEns: true,
  })

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            {
              data ? (
                <div>
                  <div>Connected to {data.address}</div>
                  <button onClick={disconnect}>Disconnect</button>
                </div>
              ) : (
                <Link href="/login">
                  <a>Login</a>
                </Link>
              )
            }
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
