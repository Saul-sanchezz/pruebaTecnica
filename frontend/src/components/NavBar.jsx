import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          to="/">Prospecto App
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
