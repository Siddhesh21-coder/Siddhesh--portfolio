import React, { useState } from 'react'
import './header.css';
import Mobile from './mobile';
import Web from './web';
function Header() {
  const [menut,setmenut]=useState(false);
  return (
    <div className='Header'>
        <div className='name'>Siddhesh Kushare</div>
        <div className='menu'>
            <div className='Web'>
                <Web />
            </div>
            <div className='mob'>
               
                <div onClick={() => setmenut(!menut)}>
                <i class="icon ion-md-menu menuicon"></i>
                </div>
                {menut&&<Mobile menut={menut} setmenut={setmenut}/>}
              </div>
            
        </div>
    </div>
  )
}

export default Header