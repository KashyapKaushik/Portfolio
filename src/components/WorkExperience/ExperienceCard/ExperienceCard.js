import React from 'react'
import './ExperienceCard.css'

function ExperienceCard({ details }) {
  return (
    <div className='work-experience-card'>
        <h6>{details.title}</h6>
        <div className='workduration'>{details.date}</div>
        <ul>
            {details.responsibilites.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceCard
