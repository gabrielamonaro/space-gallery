import './style.css'
import photos from'../../assets/photos.json'
// import image1 from '/public/assets/images/foto-1.png'
// import image1 from 'src/assets/images/foto-destaque.png'
import React from 'react'
import Tags from '../Tags'
import Card from '../Card'

export default function Galeria() {

  return (
    <section className='galeria'>
        <div>
        <h2>Navegue pela nossa galeria</h2>
        <Tags></Tags>
        
        </div>
        
        <ul className='lista'>     
          {photos.map((photo) => 
          <Card 
            image={photo.imagem} 
            title={photo.titulo} 
            desc={photo.creditos}
            key={photo.id}
          >
      
          </Card>)}
        </ul>
    </section>
  )
}
