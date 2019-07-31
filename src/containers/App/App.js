import React, { Component } from 'react'
import { fetchAnimals } from '../../apiCalls.js'
import { connect } from 'react-redux'
import { getAnimals, hasErrored, getIsLoading} from '../../actions'

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
      this.props.getAnimals( animals )
      this.props.getIsLoading(false)
    } catch(error) {
      await this.setState({ error })
    }
    
  }
  render() {
    return(
      <main>
        {this.props.isLoading && 
        <p>Please wait while we load this up</p>
        }

      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  animals: state.animals,
  isLoading: state.isLoading,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  getAnimals: (animals) => (dispatch(getAnimals(animals))),
  hasErrored: (error) => (dispatch(hasErrored(error))),
  getIsLoading: (isLoading) => (dispatch(getIsLoading(isLoading)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
