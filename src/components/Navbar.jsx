import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <div className='parentnav'>
<Link to="/">
    Home
</Link>

<Link to="/services">
    Services
</Link>

<Link to="/contacts">
    contacts
</Link>


    </div>
  )
}

export default Navbar