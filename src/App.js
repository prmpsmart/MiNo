import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Styles/GlobalStyle.css'
import './Styles/Layout.css'
import './Styles/Navigation.css'
import './Styles/LoginSignup.css'
import Navigation from './Components/Navigation/Navigation'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Home from './Components/Home/Home'
// import styled from 'styled-components'

const App = () => {
  const [active, setActive] = useState(1)

  return (
    <div className='App'>
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginSignup />}/>
        <Route path="/dashboard" element={<Navigation />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App