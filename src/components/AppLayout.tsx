import { FC } from "react"
import { Header } from "./Header"

export const AppLayout: FC = ({ children }) => {
  return (
    <div className="container">
        <Header />
        {children}
    </div>
  )
}
