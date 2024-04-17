import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/KK.png'
import MobileNav from '../MobileNav/MobileNav';
import resume from '../../assets/pdfs/kkk.pdf'



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
          <li><a className='menu-item' href='#heropart'>Home</a></li>

          <li><a className='menu-item' href='#skillspart'>Skills</a></li>

          <li><a className='menu-item' href='#workexpo'>About Me</a></li>

          <li><a className='menu-item' href='#contactpart'>Contact Me</a></li>
        {/* <button className='contact-btn' onClick={() => {}}>Hire Me</button> */}
        <button className='res-btn' onClick={() => {window.open(resume)}}>Resume</button>


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
