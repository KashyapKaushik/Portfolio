import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/KK.png'
import MobileNav from '../MobileNav/MobileNav';


function Navbar() {
  const [openMenu,setOpenMenu]=useState(false);
  const toggleMenu =() =>{
    setOpenMenu(!openMenu);

  };

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <div className='nav-wrapper'>
      <div className='nav-content'>
        <img  className="logo" src={logo} alt=""/>
        <ul>
          <li><a className='menu-item'>Home</a></li>

          <li><a className='menu-item'>Skills</a></li>

          <li><a className='menu-item'>Work Experience</a></li>

          <li><a className='menu-item'>Contact Me</a></li>
        <button className='contact-btn' onClick={() => {}}>Hire Me</button>

        </ul>
        <button className='menu-btn' onClick={toggleMenu}>
          <span class={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>{openMenu?"" :""}</span><i class="ri-menu-fill"></i>

        </button>

      </div>

    </div>
    </>
  )
}

export default Navbar
