import React from 'react'
import './Hero.css'
import photo from '../../assets/Himg.jpeg'
import cssi from '../../assets/css.webp'
import jsi from '../../assets/jss.png'
import reacti from '../../assets/rece.png'
import htmli from '../../assets/htmml.png'
import r1 from '../../assets/rcce.png'

function Hero() {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2> building Digital Experience That Inspire</h2>
            <p>
                Passionate Frontend Devloper | Transforming Ideas into Seamless and Visually Stunning Web & App Soluations  
            </p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                <img src={r1} alt=''/>
                </div>
                    <img src={photo} alt=''/>
            </div>
            <div>
            <div className='tech-icon'>
                <img src={jsi} alt=''/>
            </div>
            <div className='tech-icon'>
                <img src={htmli} alt=''/>
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
