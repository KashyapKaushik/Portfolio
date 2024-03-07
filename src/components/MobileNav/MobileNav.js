import React from 'react'
import '../MobileNav/MobileNav.css'
import logo from '../../assets/KK.png'


function MobileNav({isOpen,toggleMenu}) {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
        <img  className="logo" src={logo} alt=""/>
        <ul>
          <li><a className='menu-item'>Home</a></li>

          <li><a className='menu-item'>Skills</a></li>

          <li><a className='menu-item'>Work Experience</a></li>

          <li><a className='menu-item'>Contact Me</a></li>
        <button className='contact-btn' onClick={() => {}}>Hire Me</button>

        </ul>

        </div>
    </div>
    </>
  )
}

export default MobileNav
