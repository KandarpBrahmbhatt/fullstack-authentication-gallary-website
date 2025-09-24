import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          Auth
        </div>

        <ul>
          <Link to="/">signup</Link>
          <Link to="/login">login</Link>
          <Link to="/gallery">Gallary</Link>
          <Link to="/profile">Profile</Link>
        </ul>
    </div>
  )
}

export default Navbar
