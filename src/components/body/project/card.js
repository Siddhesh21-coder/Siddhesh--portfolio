import React from 'react'


import './card.css'
function Card ({ item }) {
  return (
    <div className='card'>
        <div className='projectinfo'>
            <label className='projecttitle'>{item.title}</label>
            <div className='projectlinks'>
                {item.demo&& (<a className='project-link' href={item.demo}>
                        <div className='linkbutton'>
                        <i class="icon ion-md-globe"></i>
                        </div>
                    </a>)}
                    {item.github&& (
                        <a className='project-link' href={item.github}>
                        <div className='linkbutton'>
                        <i class="fa fa-github"></i> Github
                        </div>
                    </a>

                    )}
            </div>
            <p>{item.about}</p>
            <div className='projecttags'>
                {item.tags.map((item1) => {
                        return <label className='tag'>{item1}</label>
                    }
                    )
                }
            </div>
        </div>
        
        <img src={item.image} alt={item.title}className='projectimage' />
    </div>
  )
}

export default Card 