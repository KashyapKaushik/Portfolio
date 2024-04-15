import React from 'react'
import './ProjectsCard.css'



function ProjectsCard({subtitle,title,photo}) {
    
  return (
    <div className='projects-card'>
        <div className='projects-image'>
            <img src={photo}/>
        </div>
        <div className='projects-desc'>
            <div className='projects-desc-content'>
            <label>{title}</label>
            <span>{subtitle}</span>
            </div>
            <button className='des-btn' onClick={() => {}}><i class="ri-share-box-line"></i></button>

        </div>
      
    </div>
  )
}

export default ProjectsCard
