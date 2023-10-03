import React from 'react'
import Button from '../Button/Button'
import {trash} from '../../Utilities/icons'
import './Expenses.css'
import '../IncomeItem/IncomeItem.css'

function ExpenseItem() {
  return (
    <div className='incomeStyle'>
      
      <div className='content'>
      <div className='icon'>

      </div>
          <h5>Books</h5>
          <div className='inner-content'>
              <div className='text'>
                  <p>$780</p>
                  <p> 13/45/2005</p>
                  <p>
                  Money Yoo
                  New Shoe Damn
                  
                  </p>
              </div>
              <div className='btn3'>
                  <Button
        
                    icon={trash}
                    bPad={'1rem'}
                    bRad={'50%'}
                    bg={'pink'}
                    color={'#fff'}
                    hColor={'red'}    
                    iColor={'#fff'}
                  
                  />
              </div>
          </div>
      </div>

      <div className='content'>
      <div className='icon'>

      </div>
          <h5>Books</h5>
          <div className='inner-content'>
              <div className='text'>
                  <p>$780</p>
                  <p> 13/45/2005</p>
                  <p>
                  Money Yoo
                  New Shoe Damn
                  
                  </p>
              </div>
              <div className='btn3'>
                  <Button
        
                    icon={trash}
                    bPad={'1rem'}
                    bRad={'50%'}
                    bg={'pink'}
                    color={'#fff'}
                    hColor={'red'}    
                    iColor={'#fff'}
                  
                  />
              </div>
          </div>
      </div>

      <div className='content'>
      <div className='icon'>

      </div>
          <h5>Books</h5>
          <div className='inner-content'>
              <div className='text'>
                  <p>$780</p>
                  <p> 13/45/2005</p>
                  <p>
                  Money Yoo
                  New Shoe Damn
                  
                  </p>
              </div>
              <div className='btn3'>
                  <Button
        
                    icon={trash}
                    bPad={'1rem'}
                    bRad={'50%'}
                    bg={'pink'}
                    color={'#fff'}
                    hColor={'red'}    
                    iColor={'#fff'}
                  
                  />
              </div>
          </div>
      </div>
    </div>
  )
}

export default ExpenseItem