import React from 'react'
import './Button.css'

const Button= ({name, icon, onClick,bg, bPad, color,bRad}) => {
  // const hoverStyle={
  //   backgroundColor: 'hoverColor',
  //   color: '#fff',
  // }
  return (

    <div className='ButtonStyle'  style={{
        background:bg,
        padding:bPad,
        borderRadius:bRad,
        color:color,
        transition: 'background-color 0.3s, color 0.3s',
    }} onClick={onClick}>
        {icon}
        {name}
    </div>
    
  )
}

export default Button