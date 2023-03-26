import React from 'react'
import shoppinglogo from "../../images/cart.gif"
import "./Header.css";   
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='headerWrapper'>
     <div className='imagewrapper'>
        <img src={shoppinglogo} alt="" />
     </div>
     <div className='navItems'>
     <ul>
       <Link to="/"><li>Home</li></Link>
       <Link to="/aboutus"><li>AboutUs</li></Link>
       <Link to="/contact"><li>Contact</li></Link>
       <Link to="/cart"><li>Cart</li></Link>
       
       
      </ul>
     </div>
    </div>
  )
}

export default Header;
