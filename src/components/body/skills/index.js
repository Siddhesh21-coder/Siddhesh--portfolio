import React from 'react'
import Separator from '../../common/separator'
import { Skilldata } from '../../data/skills'
import Skillcard from './skillcard';
import './skills.css'
function Skills() {
  const data = Skilldata;
  return (
    <div className='skills'>
      <Separator />
      <label className='section-title'>Skills</label>
      <div className='skillscontainer'>
        {data.map((item) => {
          return (
            <div className='skillsection'>
              <label className='skillsectiontitle'>{item.type}</label>
              <div className='skillslist'>
                {item.list.map((item1) => {
                  return(
                    <Skillcard item1={item1} />
                  )
                })}
              </div>
            </div>
          )
        })}    
      </div>
    </div>
  )
}

export default Skills