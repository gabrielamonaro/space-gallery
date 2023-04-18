import React from 'react'
import photos from '../../assets/populares.json'
import './style.css'

export default function Populares() {
  return (
    <aside className='populares'>
        <h2>Populares</h2>
        <ul className='populares__imagens'>

          {photos.map((photo) => 
          {
            return(
              <li>
                <img src={photo.path} alt={photo.alt} />
              </li>
              
            )
          }
          
          )} 
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
