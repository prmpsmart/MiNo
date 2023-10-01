import React, { useState } from 'react'
import './Styles/GlobalStyle.css'
import './Styles/Layout.css'
import './Styles/Navigation.css'
import './Styles/LoginSignup.css'
import Navigation from './Components/Navigation/Navigation'
import LoginSignup from './Components/LoginSignup/LoginSignup'
// import styled from 'styled-components'

const App = () => {
  const [active, setActive] = useState(1)
  

  return (
    <div className='App'>
      <div className='MainLayout'>
       <Navigation active= {active} setActive = {setActive} />
       <LoginSignup />
       </div>
    </div>
  );
}

export default App