import React from 'react'
import './ContactInfoCard.css'

function ContactInfoCard({iconUrl,text,url}) {
  return (
    <div className='contact-details-card'>
        <div className='icon'>
          <a href={url}> 
            <img src={iconUrl} alt={text}/></a>
        </div>
        <p>{text}</p>

    </div>

  )
}

export default ContactInfoCard
