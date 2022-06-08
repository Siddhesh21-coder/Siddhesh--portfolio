import React from 'react'
import './skillcard.css'
function Skillcard({item1}) {
  return (
    <div className='Skillcard'>
            <label className='skillicon'>{item1.icon}</label>
            <label className='skillname'>{item1.name}</label>
            
        
    </div>
  )
}

export default Skillcard