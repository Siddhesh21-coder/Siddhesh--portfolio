import React from 'react'
import './web.css'

function Web() {
  return (
    <div className='web'>
      <div className='webmenu'>
        <a href='#project'><i class="icon ion-md-laptop iconstyle"></i> Project</a>
      </div>
      <div className='webmenu'>
        <a href='#skills'><i class="icon ion-md-code iconstyle"></i> Skills</a>
      </div>
      <div className='webmenu'>
        <a href="#certificates"><i class="icon ion-md-trophy iconstyle"></i> Certificates</a>
      </div>
      <div className='webmenu'>
        <a href='#contact'><i class="icon ion-md-contact iconstyle"></i> Contact</a>
      </div>
    </div>
  )
}

export default Web