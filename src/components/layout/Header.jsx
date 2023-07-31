import React from 'react'
import Navigationbar from '../navigation/navigationbar'
import Hola from '../navigation/Hola'
function Header() {
  return (
    <div>
      {/* <Hola/> */}
      <Navigationbar/>
      <div className='h-20 bg-gray-100'></div>
    </div>
  )
}

export default Header