import React from 'react'
import shoppinglogo from "../../images/cart.gif"
import "./Header.css";   
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector(store => store.cart.items);

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
       <Link to="/cart"><li>Cart - { cartItems.length }</li></Link>
       
       
      </ul>
     </div>
    </div>
  )
}

export default Header;
