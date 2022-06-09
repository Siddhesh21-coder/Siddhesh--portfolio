import React from 'react'
import './mobile.css'
function Mobile({menut, setmenut}) {
  return (
    <div className='Mobile'>
      <div className='close' onClick={() =>setmenut(!menut)}>
      <i class="icon ion-md-close"></i>
      </div>
      <div className='mobopt'>
      <div className='mobmenu'>
        <a href='#project' onClick={() =>setmenut(!menut)}><i class="icon ion-md-laptop iconstyle"></i> Project</a>
      </div>
      <div className='mobmenu'>
        <a href='#skills' onClick={() =>setmenut(!menut)}><i class="icon ion-md-code iconstyle"></i> Skills</a>
      </div>
      <div className='mobmenu'>
        <a href="#certificates" onClick={() =>setmenut(!menut)}><i class="icon ion-md-trophy iconstyle"></i> Certificates</a>
      </div>
      <div className='mobmenu'>
        <a href='#contact' onClick={() =>setmenut(!menut)}><i class="icon ion-md-contact iconstyle"></i> Contact</a>
      </div>
      </div>
    </div>
  )
}

export default Mobile