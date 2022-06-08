import React from 'react'
import Separator from '../../common/separator'
import Socialmedia from '../../common/social-media'
import './contact.css'
function Contact() {
  return (
    <div className='contact'>
      <Separator />
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-details'>
        <i class="icon ion-md-pin contact-icon"></i>
        <label className='contactlabel'>Location:</label>
        <p>Sumati Nagar, Lasalgaon, Nashik. Pincode:422306 </p>

        <i class="icon ion-md-mail contact-icon"></i>
        <label className='contactlabel'>Email:</label>
        <p>siddheshkushare2002@gmail.com</p>

        <i class="icon ion-md-call contact-icon"></i>
        <label className='contactlabel'>Call:</label>
        <p>+91 7972835694</p>
        
        </div>
        <div className='downloadResume'>
          <a download href={require('../../../assets/resume.pdf')}>
          <i class="icon ion-md-download download-icon"></i>
            Download Resume
          </a>
        </div>
        
      </div>
      <Socialmedia />
    </div>
  )
}

export default Contact