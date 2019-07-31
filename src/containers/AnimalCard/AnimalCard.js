import React from 'react'
import './AnimalCard.css'

export const AnimalCard = ({img, name, species, description, id}) => {

  return(
    <article id={id} className='animal-card'>
      <img src={img} alt='animal' className='animal-image'/>
      <h2>{name}</h2>
      <h3>{species}</h3>
      <p>{description}</p>
    </article>
  )
}