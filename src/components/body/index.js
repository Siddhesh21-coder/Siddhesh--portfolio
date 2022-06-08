import React from 'react'
import About from './about'
import Project from './project'
import './body.css'
import Skills from './skills'
import Certificate from './certificates'
import Contact from './contact'
function Body() {
  return (
    <div className='Body'>
      <section id='about'>
        <About />
        </section>
        <section id='project'>
        <Project />
        </section>
        <secton id='skills'>
          <Skills />
        </secton>
        <secton id='certificate'>
          <Certificate />
        </secton>
        <secton id='contact'>
          <Contact />
        </secton>
    </div>
  )
}

export default Body