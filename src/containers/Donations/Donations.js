import React from 'react'
import { connect } from 'react-redux'
import {DonationsCard} from '../DonationsCard'




const AnimalContainer = ({ error, isLoading, donations})  =>  {

    const buildDonationCards = donations.map(don => {
      return <DonationsCard 
      name={don.name} 
      donation={don.donation} 
      id = {don.id}
    />
    })

    return(
      <section>
        <header>
          {isLoading && 
          <p>Please wait while we load this up</p>
          }
          {error && 
          <p>{error}</p>
          }
        </header>
        <section className='donation-container'>
        {buildDonationCards}
        </section>
      </section>
    )
  }


export const mapStateToProps = (state) => ({
  donations: state.donations,
  isLoading: state.isLoading,
  error: state.error
})

export default connect(mapStateToProps)(AnimalContainer);