import React, { useState } from 'react'
// import './Navigation.css'
import { menuItems } from '../../Utilities/menuItems'
import { logout } from '../../Utilities/icons'
import logo from '../image/Group 2.svg'

const Navigation = ({active, setActive}) => {


  return (

<nav className='nav'>
  <div className='logo'>
      <img src={logo} alt='hello' />
  </div>

    <ul className='menu-items'>
      {menuItems.map((item) => {
        return <li 
          key={item.id}
          onClick={() => setActive(item.id)}
          className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
        </li>
      })}
    </ul>

    <div className='bottom-nav'>
      <li>
        {logout} Log Out
      </li>
    </div>
</nav>

  )
}

export default Navigation