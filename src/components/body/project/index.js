import React from 'react'
import Separator from '../../common/separator';
import { ProjectData } from '../../data/project'
import Card from './card';
import './projects.css'
function Project() {
  const data = ProjectData;
  return (
    <div className='project'>
      <Separator />
      <label className='section-title'>Projects</label>
      <div>
       {data.map((item) => {
         return <Card item={item} />
       })
       }

     
      </div>
    </div>
  )
}

export default Project