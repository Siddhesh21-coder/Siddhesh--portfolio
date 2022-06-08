import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './certificate.css'
import Separator from '../../common/separator';
import { CertificateData } from '../../data/certificates';
function Certificate() {
  
  const data = CertificateData;

  
  return (
    <div className='certificate'>
      <Separator />
      <label className='section-title'>Certificates</label>
      <div className='certificatelist'>
      <Slide>
         {data.map((item, index)=> (
            <div className="each-slide" key={index}>
              <div className='cert'>
                <img src={item.img} className='certimg' alt={item.name}/>
                <label className='certname'>{item.name}</label>
              </div>
            </div>
          ))} 
        </Slide>

      </div>
    </div>
  )
}

export default Certificate