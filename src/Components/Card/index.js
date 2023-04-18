import './style.css'
import like from '../../assets/icons/favorite_outline.png'
import open from '../../assets/icons/open_in_full.png'

import React from 'react'

export default function Card(props) {
  return (
   
    <div className='card'>
        <div className='container-image'>
          <img src={props.image} alt={props.title} />
        </div>
        <div className='container-desc'>
          <div className='text'>
            <h4>{props.title}</h4>
            <span>{props.desc}</span>
          </div>
         

          <div className='icons'>
            <img src={like} alt="" />
            <img src={open} alt="" />
          </div>

        </div>
    </div>

  )
}
