import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"


const Layout = () => {
  return (
    <>
      <main className="">
        <NavBar/>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
