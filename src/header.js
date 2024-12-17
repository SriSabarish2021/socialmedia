import React from 'react'
import './header.css'
const Header = ({title}) => {
  return (
    <div className='title'>
        <h1>{title}</h1>
    </div>
  )
}


export default Header