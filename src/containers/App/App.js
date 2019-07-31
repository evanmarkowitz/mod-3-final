import React, { Component } from 'react'
import AnimalsContainer from '../AnimalsContainer';
import Donations from '../Donations/Donations'
import DonationForm from '../DonationForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      animals: [],
      error: ''
    }
  }
  render() {
    return(
      <main>
        <AnimalsContainer />
        <Donations />
        <DonationForm />
      </main>
    )
  }
}


export default App
