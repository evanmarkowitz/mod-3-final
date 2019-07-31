import React, { Component } from 'react'
import AnimalsContainer from '../AnimalsContainer';
import Donations from '../Donations/Donations'

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
      </main>
    )
  }
}


export default App
