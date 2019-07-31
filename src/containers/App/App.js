import React, { Component } from 'react'
import { fetchAnimals } from '../../apiCalls.js'

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
      let animals = await fetchAnimals()
      this.setState({ animals })
    } catch(error) {
      await this.setState({ error })
    }
    
  }
  render() {
    return(
      <main>

      </main>
    )
  }
}

export default App;
