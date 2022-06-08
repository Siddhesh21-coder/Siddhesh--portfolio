import React from 'react'
import Socialmedia from '../../common/social-media'
import './about.css'
function About() {
  return (
    <div className='about'>
        <div className="about-top">
          <div className='about-info'>
         Hey 🥷!<br />I am a <span className='type1 type'>Fullstack, </span><span className='type2 type'>  Machine Learning,</span><span className='type3 type'> Cloud Computing </span><span className='type123 type'>Enthusiast, </span> <span className='type4 type'>Student, </span><span className='type5 type'> Java Developer</span>
        </div>
        <div className='about-photo'>
            <img src={require('../../../assets/myrep.png')} alt='My_Representation' className='myrepresent'/>
            </div>
        </div>
        <Socialmedia />
    </div>
  )
}

export default About