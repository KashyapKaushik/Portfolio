import React from 'react'
import '../MobileNav/MobileNav.css'
import logo from '../../assets/KK.png'
import resume from '../../assets/pdfs/kkk.pdf'


function MobileNav({isOpen,toggleMenu}) {
  return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
        <img  className="logo" src={logo} alt=""/>
        <ul>
          <li><a className='menu-item' href='#heropart'>Home</a></li>

          <li><a className='menu-item' href='#skillspart'>Skills</a></li>

          <li><a className='menu-item' href='#workexpo'>About Me</a></li>

          <li><a className='menu-item' href='#contactpart'>Contact Me</a></li>
        {/* <button className='contact-btn' onClick={() => {}}>Hire Me</button> */}
        <button className='res-btn' onClick={() => {window.open(resume)}}>Resume</button>


        </ul>

        </div>
    </div>
    </>
  )
}

export default MobileNav
