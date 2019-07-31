import React, { Component } from 'react'
import AnimalsContainer from '../AnimalsContainer';
import Donations from '../Donations/Donations'
import DonationForm from '../DonationForm'
import { getAnimals, hasErrored, getIsLoading, getDonations} from '../../actions'
import { connect } from 'react-redux'
import { fetchAnimals, fetchDonations, fetchNewDonation } from '../../apiCalls.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      animals: [],
      error: ''
    }
  }

  async componentDidMount() {
    try {
      let fetchedAnimals = await fetchAnimals()
      let fetchedDonations = await fetchDonations()
      this.props.getDonations( fetchedDonations )
      this.props.getAnimals( fetchedAnimals )
      this.props.getIsLoading(false) 
    } catch(error) {
      await this.props.hasErrored(error)
    }
  }

  addDonation = async (donation) => {
    try {
      let confirmDonation = await fetchNewDonation(donation)
      let allDonations = [...this.props.donations, confirmDonation]
      this.props.getDonations(allDonations)
    
    } catch(error) {
      await this.props.hasErrored(error)
    }
  }

  render() {
    return(
      <main>
        <AnimalsContainer />
        <Donations />
        <DonationForm addDonation ={this.addDonation} />
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  donations: state.donations,
  isLoading: state.isLoading,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  getAnimals: (animals) => (dispatch(getAnimals(animals))),
  hasErrored: (error) => (dispatch(hasErrored(error))),
  getIsLoading: (isLoading) => (dispatch(getIsLoading(isLoading))),
  getDonations: (donations) => (dispatch(getDonations(donations))),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
