import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchNewDonation} from '../../apiCalls'
import { getDonations, hasErrored, getIsLoading} from '../../actions'

class DonationForm extends Component {

  constructor ( ) {
    super() 
    this.state = {
      name:'',
      donation: 0
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addDonation = async () => {
    let donation = await {id: Date.now(), name: this.state.name, donation: this.state.donation}
    try {
      let confirmDonation = await fetchNewDonation(donation)
      let allDonations = [...this.props.donations, confirmDonation]
      this.props.getDonations(allDonations)
    
    } catch(error) {
      await this.props.hasErrored(error)
    }
  }
  clearInputs = () => {
    this.setState({name:'', donation: 0})
  }

  render() {
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
        <form>
          <input 
          type='text'
          value={this.state.name}
          name = 'name'
          placeholder = 'Name'
          onChange={event => this.handleChange(event)}
          />
          <input 
          type='text'
          value={this.state.donation}
          name = 'donation'
          placeholder = 'Donation'
          onChange={event => this.handleChange(event)}
          />
          <button type ='button' onClick={this.addDonation}>Submit</button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(DonationForm);