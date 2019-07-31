import React from 'react'
import './DonationCard.css'

export const DonationsCard = ({name, donation}) => {

  return (
    <article className='donation-card'>
      <p>{name} has recently donated ${donation}!</p>
    </article>
  )
}