import React from 'react'
import './Hero.css'
import photo from '../../assets/Himg.jpeg'
import cssi from '../../assets/css.webp'
import js1 from '../../assets/newjs.png'
import atom from '../../assets/atom.png'
import nhtml from '../../assets/newhtml.png'




function Hero() {
  return (
    <section className='hero-container'  id='heropart'>
        <div className='hero-content'>
            <h2> building Digital Experience That Inspire</h2>
            <p>
                Passionate Frontend Devloper | Transforming Ideas into Seamless and Visually Stunning Web & App Soluations  
            </p>
            <button className='res-btn' onClick={() => {}}>Resume</button>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                <img src={atom} alt=''/>
                </div>
                    <img src={photo} alt=''/>
            </div>
            <div>
            <div className='tech-icon'>
                <img src={js1} alt=''/>
            </div>
            <div className='tech-icon'>
                <img src={nhtml} alt=''/>
            </div>
            <div className='tech-icon'>
                <img src={cssi} alt=''/>
            </div>
            </div>
            
            

            


        </div>

    </section>
  )
}

export default Hero
