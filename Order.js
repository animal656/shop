import React from 'react'
import './Order.css'

const Order = () => {
  return (
    <div className='orders  '>
        <div className="favorite ">
            <div className="imformation">
            <h1>Order Your <br></br>
                Favourite coffee</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit<br></br>
                   Cum, quos culpa. Minima sint autem rerum alias magn <br></br>
                   saepe deleniti, ea quam libero doloremque accusamus <br></br>
                   cepturi, aperiam soluta, ex quas!</p>
                   <button>Order Now</button></div>
                   <div className="image3">
                    <img src="https://th.bing.com/th/id/OIP.0_4YLz9Pl6tEYSCDH3_TxAHaE8?w=298&h=199&c=7&r=0&o=5&pid=1.7" alt="" />
            </div>
            </div>        
    </div>
  )
}

export default Order