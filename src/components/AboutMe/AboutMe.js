import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <section className='about-container'>
        <h5>About Me</h5>
        <div className='education-content'>
            <h6>Education</h6>
            <div className='ssc-content'>
                <h6>10th</h6>
                <p>SSC BOARD</p>
                <p>81.5%</p>
            </div>
            <div className='ssc-content'>
                <h6>12</h6>
                <p>HSC BOARD</p>
                <p>81.5%</p>
            </div>
            <div className='ssc-content'>
                <h6>BSC-CS</h6>
                <p>GUJARAT UNIVERSITY</p>
                <p>7.42 CGPA</p>
            </div>
            <div className='ssc-content'>
                <h6>MSC-IT</h6>
                <p>GLS UNIVERSITY</p>
                <p>Pusuing</p>
            </div>

        </div>

    </section>
  )
}

export default AboutMe
