import React, { useState } from 'react'
import './Navigation.css';
import '../../Styles/GlobalStyle.css';
import { menuItems } from '../../Utilities/menuItems'
import { logout } from '../../Utilities/icons'
import logo from '../image/Group 2.svg'
import {Link, BrowserRouter} from "react-router-dom"

const Navigation = ({}) => {

  const [activeItem, setActiveItem] = useState(null);
  return (

<nav className='nav'>
  <div className='logo'>
      <img src={logo} alt='hello' />
  </div>
  {/* <BrowserRouter> */}

    <ul className='menu-items'>
      {menuItems.map((item) => {
        return <Link to={`${item.link}`}><li 
          key={item.id}
          onClick={() => setActiveItem(item.id)}
          className={activeItem === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
        </li>
        </Link> 
      })}
    </ul>
    {/* </BrowserRouter> */}
    {/* <Outlet/> */}

    <div className='bottom-nav'>
      <li>
        {logout} Log Out
      </li>
    </div>
</nav>

  )
}

export default Navigation