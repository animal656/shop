import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar flex'>
      <div className="logocontainer container">
       <h1>Alowishes</h1>
        </div>
        <div className='menus'>
        <ul>
        <li>Cafe menu</li>
        <li>About us</li>
        <li>Find us</li>
        <li>Alowishus catring</li>
        <button className='btn'>Buy Gift Vouchers</button>
      </ul>
      </div>
      
    </div>
  )
}

export default Navbar