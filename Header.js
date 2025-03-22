import React from 'react'
import './Header.css'
import './Navbar.css'


const Header = () => {
  return (
    <div className='header flex'>
        <div className="block container" >
           <h1>Alowishus<br></br>
              Deliciious<br></br>
              Coffee
           </h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum fugit ipsa dolorum impedit odit ,<br></br> ea aperiam at, officia hic iure voluptates.</p>
          <button className='btn1'>Download App</button>
          <button className='btn2'>Shop Coffee</button>
        </div>
        <div className="image">
          <img src="https://th.bing.com/th/id/OIP.8Fq2DHzY35jOWselzrozIQHaE8?w=292&h=195&c=7&r=0&o=5&pid=1.7" alt="" />
        </div>
    </div>
  )
}

export default Header