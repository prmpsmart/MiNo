import React, { useState } from 'react'
import './Styles/GlobalStyle.css'
import './Styles/Layout.css'
// import './Navigation/Navigation.css';
import './Components/Navigation/Navigation.css'; // Correct


import Dashboard from './Components/Dashboard/Dashboard';
import Incomes from './Components/Incomes/Incomes';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './Context/GlobalContext';
// import styled from 'styled-components'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from './Layout';

const App = () => {
 
  

  const global = useGlobalContext()
  return (
 
  
    <><BrowserRouter>
    <Routes>
      <Route exact path='/'  element={<MainLayout children={<Dashboard/>}/>}/>
      <Route exact path='/expenses' element={<MainLayout children={<Expenses/>}/>}/>
      <Route exact path='/income' element={<MainLayout children={<Incomes/>}/>}/>
      {/* <Route path='/expenses' element={<Expenses/>}/> */}
  
    </Routes>
  </BrowserRouter></>
  );
}

export default App