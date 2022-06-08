import React from 'react'
import { Socialapps } from '../../data/social'
import './social.css'
function Socialmedia() {
  const arr = Socialapps;
    return (
        <div className='Socialmedia'>
        {arr.map((item => {
            return(
                <a href={item.link}>
                <div className='socialap'>
                    <img src={item.icon} className='icons' />

                </div>
                </a>
            )
        }))}
    </div>
  )
}

export default Socialmedia