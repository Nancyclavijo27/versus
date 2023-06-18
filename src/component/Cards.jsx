import React from 'react'
import './Cards.css'
import Cardi from './Cardi'

export default function Cards({characters}) {
    const left = characters.cardLeft.name ? characters.cardLeft : null//esto es para que no se rompa y determine que accion tomar
    const right = characters.cardRight.name ? characters.cardRight : null
    return (
    <div className='cards'>
        <Cardi character={left}/>
        <Cardi character={right}/>
    </div>
  )
}
