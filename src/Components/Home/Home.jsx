import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../Styles/homeItems.css'
//import { homeItems } from '../../Utilities/homeItems'
import logo from '../image/Group 2.svg'
import 'font-awesome/css/font-awesome.min.css';

const Home = ({active, setActive}) => {


  return (
<nav className='nav'>
  <div className='logo'>
      <Link to="/"> <img src={logo} alt='Logo' /> </Link>
  </div>

    <ul className='menu-items'>
    <Link to="/" className="item"><i className="fa-solid fa-house"></i><li> Home</li></Link>
    <Link to="*" className="item"><i className="fa-regular fa-address-book"></i><li> Contact</li></Link>
    <Link to="/login" className="item"><i className="fa-solid fa-right-to-bracket"></i><li>Register</li></Link>
    </ul>
</nav>

  )
}

export default Home