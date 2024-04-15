import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import mail from '../../assets/mail.svg'
import git2 from '../../assets/git2.svg'
import link from '../../assets/linke.svg'
import insta from '../../assets/insta.svg'
import wp from '../../assets/whatsapp.png'

import ContactForm from './ContactForm/ContactForm'


function ContactMe() {
  return (
    <section className='contact-container' id='contactpart'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
        <div className='contact-info' style={{flex:1}}>
            <ContactInfoCard
            iconUrl={mail} 
            url='mailto::getmekkc@gmail.com'
            // text="getmekkc@gmail.com"
            />
            <ContactInfoCard
            iconUrl={git2}
            url='https://github.com/KashyapKaushik'

            // text="github.com"
            />
                        <ContactInfoCard
            iconUrl={wp}
            // url={'https://www.instagram.com/kk_kashyap_014/?igsh=YWlpY3JyZmQ5amxk'}
            url={'https://web.whatsapp.com/send?phone=+917878068805'}
            // text="github.com"
            />
                        <ContactInfoCard
            iconUrl={link}
            url='https://www.linkedin.com/in/kaushikkumar-kashyap/'
            // text="github.com"
            />
        </div> 
        <div style={{flex:1}}>
            <ContactForm/>
        </div> 
        </div>


    </section>
  )
}

export default ContactMe

{/* <a href="https://web.whatsapp.com/send?phone=+919173310082" ">Send a Message</a> */}