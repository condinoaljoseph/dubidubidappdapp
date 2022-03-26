import { useAccount } from "wagmi"

export const Header = () => {
  const [{ data }, disconnect] = useAccount({
    fetchEns: true,
  })

  return (
    <div>
      <span>{data?.address}</span>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  )
}
