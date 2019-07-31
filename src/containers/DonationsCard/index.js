import React from 'react'
import './DonationCard.css'

export const DonationsCard = ({name, donation, id}) => {

  return (
    <article className='donation-card' id={id}>
      <p>{name} has recently donated ${donation}!</p>
    </article>
  )
}