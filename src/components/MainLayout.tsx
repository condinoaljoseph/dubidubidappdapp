import { FC } from "react"
import Nav from "./Nav"

const MainLayout: FC = ({ children }) => {
  return (
    <div>
        <Nav />
        {children}
    </div>
  )
}

export default MainLayout
