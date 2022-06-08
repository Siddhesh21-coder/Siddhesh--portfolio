import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
      Made by 🥷 Siddhesh Kushare
      <div className='credits' >
        <a href="https://storyset.com/people" className='cred'>People illustrations by Storyset</a> <label className='divider'>|</label> 
        <a className='cred' href="https://iconscout.com/icon-pack/social-media-logos" >Social Media Logos Icon Pack</a> by <a className='cred' href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a><label className='divider'>|</label> 
        <a className='cred' href="https://iconscout.com/icons/github">Github Icon</a> by <a className='cred' href="https://iconscout.com/contributors/unicons" >Unicons Font</a>
    </div>
    </div>
  )
}

export default Footer