import { signOut } from "next-auth/react"
import { useRequireAuth } from "../hooks/useRequireAuth"

export const Header = () => {
  const session = useRequireAuth();
  if (!session) return <h1>Loading</h1> // add loader component

  return (
    <div>
      <span>{session?.user?.name}</span>
      <button className="bg-cyan-500" onClick={() => signOut()}>Logout</button>
    </div>
  )
}
