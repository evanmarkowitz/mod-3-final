import React, { Component } from 'react'
import { fetchDonations } from '../../apiCalls.js'
import { connect } from 'react-redux'
import { getDonations, hasErrored, getIsLoading} from '../../actions'
import {DonationsCard} from '../DonationsCard'



class AnimalContainer extends Component {
  
  async componentDidMount() {
    try {
      let fetchedDonations = await fetchDonations()
      this.props.getDonations( fetchedDonations )
      this.props.getIsLoading(false) 
    } catch(error) {
      await this.props.hasErrored(error)
    }
  }

  render() {

    const buildDonationCards = this.props.donations.map(don => {
      return <DonationsCard 
      name={don.name} 
      donation={don.donation} 
      id = {don.id}
    />
    })
    return(
      <section>
        <header>
          {this.props.isLoading && 
          <p>Please wait while we load this up</p>
          }
          {this.props.error && 
          <p>{this.props.error}</p>
          }
        </header>
        <section className='donation-container'>
        {buildDonationCards}
        </section>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  donations: state.donations,
  isLoading: state.isLoading,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  getDonations: (donations) => (dispatch(getDonations(donations))),
  hasErrored: (error) => (dispatch(hasErrored(error))),
  getIsLoading: (isLoading) => (dispatch(getIsLoading(isLoading)))

})

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer);