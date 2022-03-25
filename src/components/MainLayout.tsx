import Nav from "./Nav"

const MainLayout = ({ children }) => {
  return (
    <div>
        <Nav />
        {children}
    </div>
  )
}

export default MainLayout
