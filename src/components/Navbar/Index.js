import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {FiArrowRightCircle} from 'react-icons/fi'

import './Navbar.css'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = ()=>{
        setToggle((prevToggle)=>(!prevToggle))
        console.log(toggle)
    }
    
    return (
        <div className='Nav'>   
            <NavLink className="navLink" to='/'>
                <h1>Logo</h1>
            </NavLink>
            <div className='Bars' onClick={handleToggle}>
                {
                    toggle ? <FiArrowRightCircle /> :<FaBars />  
                }
                
                
            </div>
            <div className={toggle ? 'NavMenu' : 'NavMenu togleCLose'}>
                <NavLink className="navLink"  to='/services' activeStyle>
                    Services
                </NavLink>
                <NavLink  className="navLink" to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink className="navLink"  to='/contact-us' activeStyle>
                    Contact Us
                </NavLink>
                <NavLink className="navLink"  to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
            </div>
            <div className='NavBtn'>
                <button className='NavBtnLink' to='/sign-in'>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar