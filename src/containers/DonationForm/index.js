import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getDonations, hasErrored, getIsLoading} from '../../actions'
import './DonationForm.css'

class DonationForm extends Component {

  constructor ( ) {
    super() 
    this.state = {
      name:'',
      donation: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addDonation = async () => {
    let donation = await {id: Date.now(), name: this.state.name, donation: this.state.donation}
    this.props.addDonation(donation)
    this.clearInputs()
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
        <form className='donation-form'>
          <h1>Add a donation</h1>
          <input 
          type='text'
          value={this.state.name}
          name = 'name'
          placeholder = 'Name'
          onChange={event => this.handleChange(event)}
          className='name'
          />
          <input 
          type='text'
          value={this.state.donation}
          name = 'donation'
          placeholder = 'Donation'
          onChange={event => this.handleChange(event)}
          className='donation'
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