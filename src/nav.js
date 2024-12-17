import React, { useRef } from 'react'
import './nav.css'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Nav = ({noval,getval,getall}) => {
  const useref=useRef()
  return (
        <nav className='navbar'>
            <input ref={useref} type="search" placeholder='Search Post' title='post' value={noval} onChange={(e)=>getval(e.target.value)}/>
            <button type='button' onClick={()=>{getall(noval);useref.current.focus()}}><FaSearch /></button>
            <Link to={`/${noval}`}></Link>
        </nav>
  )
}

export default Nav