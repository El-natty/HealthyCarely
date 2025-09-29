import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      
      <div className='heading'>
            <h1>Healthy<span>Carely</span></h1>
          </div>

        <nav className='nav1'>

          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Doctor</a></li>
            <li><a href=''>Service</a></li>
            <li><a href=''>Review</a></li>
          </ul>
        </nav>

        <nav className='nav2'>
          <ul>
            <li><a href=''>Sign In</a></li>
            <li><a href='' id='btn'>Sign Up</a></li>
          </ul>

        </nav>

    </div>
  )
}

export default Navbar