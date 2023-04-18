import React from 'react'
import home from 'assets/icons/home.png'
import maisVistas from 'assets/icons/eye.png'
import maisCurtidas from 'assets/icons/like.png'
import surpreendaMe from 'assets/icons/idea.png'
import novas from 'assets/icons/new.png'
import './style.css'

export default function Menu() {
  return (
    <nav className='menu'>
        <ul>
            <li>
          <img src={home} alt="" /> 
               <a href="">Início</a>
            </li>
             <li>
               <img src={maisVistas} alt="" /> 
               <a href="">Mais vistas</a>
            </li>
            <li>
               <img src={maisCurtidas} alt="" /> 
               <a href="">Mais curtidas</a>
            </li>
            <li>
               <img src={novas} alt="" /> 
               <a href="">Novas</a>
            </li>
            <li>
               <img src={surpreendaMe} alt="" /> 
               <a href="">Surpreenda-me</a> 
            </li> 
        </ul>
    </nav>
  )
}
