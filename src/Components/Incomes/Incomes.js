import React from 'react'
import { useGlobalContext } from '../../Context/GlobalContext'
import Form from '../Form/Form'
import { useState } from 'react';
import IncomeItem from '../IncomeItem/IncomeItem';
import "./Incomes.css"


const Incomes = () => {
  const {addIncome, incomes, getincomes} = useGlobalContext()

  
  return (
    <div className='IncomeStyle'> 
      <div className='InnerLayout'>
        <h1>Incomes</h1>
        <div className='income-content' >
          <div className="form-container">
            <Form/>   
          </div>
          <div className='incomes'>
            <IncomeItem/>

          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Incomes