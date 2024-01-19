import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import LOGO from './Free_Sample_By_Wix.jpg'

const NavBar = () => {
  return (
    <>
        <nav className='navContainer'>
         <aside className='logo'>
            <img src={LOGO} alt="logo" height="80px" width="90px"/>         
         </aside>
         <aside className='listitem'>
                <ul>
                   <NavLink to="/">
                   <li className='list'>
                      <span>HOME</span>
                      <span><AiOutlineHome /> </span>
                   </li>
                   </NavLink>
                    <NavLink to="/viewall">
                    <li className='list'>
                      <span>VIEW-ALL</span>
                      <span><GrView /></span>
                    </li>
                    </NavLink>
                </ul>
         </aside>
        </nav>
    </>
  )
}

export default NavBar