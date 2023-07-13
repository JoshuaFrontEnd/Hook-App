import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark rounded-2" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <nav className="navbar-nav">
            <NavLink
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
              to="/">
              Home
            </NavLink>
            <NavLink
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
              to="/about">
              About
            </NavLink>
            <NavLink
              className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
              to="/login">
              Login
            </NavLink>
          </nav>
        </div>
      </div>
    </nav>
  )
}
