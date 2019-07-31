import React, { Component } from 'react'
import AnimalsContainer from '../AnimalsContainer';

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
      </main>
    )
  }
}


export default App
