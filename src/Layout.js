import React from 'react'
import Navigation from './Components/Navigation/Navigation';

const MainLayout = ({children}) => {
  return (
    <div className='App'>
    <div className='MainLayout'>
     <Navigation  />
      <main>
          
{children}
       
      </main>
    </div>
  </div>
  )
}

export default MainLayout