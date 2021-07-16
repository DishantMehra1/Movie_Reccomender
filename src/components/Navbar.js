import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="Navbar" >
      <li>
        <NavLink activeClassName="active" to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/favorites">Favorites</NavLink>
      </li>
    </div>
  )
}

export default Navbar
