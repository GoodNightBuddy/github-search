import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => (

  <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
  <NavLink className="navbar-brand" to={'/'}>Github Search</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" exact to={'/'}>Main<span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/about'}>Info</NavLink>
      </li>
    </ul>
  </div>
</nav>

)