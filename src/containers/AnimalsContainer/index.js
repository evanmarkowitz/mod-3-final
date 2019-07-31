import React, { Component } from 'react'
import { fetchAnimals } from '../../apiCalls.js'
import { connect } from 'react-redux'
import { getAnimals, hasErrored, getIsLoading} from '../../actions'
import {AnimalCard } from '../AnimalCard/AnimalCard'
import './AnimalContainer.css'


class AnimalContainer extends Component {
  
  async componentDidMount() {
    try {
      let fetchedAnimals = await fetchAnimals()
      this.props.getAnimals( fetchedAnimals )
      this.props.getIsLoading(false) 
    } catch(error) {
      await this.props.hasErrored(error)
    }
  }

  buildAnimalCards = this.props.animals.map(animal => {
      return <AnimalCard 
      name={animal.name} 
      img={animal.img} 
      species={animal.species} 
      description={animal.description} 
      id= {animal.id}
    />
    })


  render() {

    const buildAnimalCards = this.props.animals.map(animal => {
      return <AnimalCard 
      name={animal.name} 
      img={animal.img} 
      species={animal.species} 
      description={animal.description} 
      id= {animal.id}
      key={animal.id}
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
        <section className='card-container'>
        {buildAnimalCards}
        </section>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer);