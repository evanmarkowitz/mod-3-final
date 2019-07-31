import React, { Component } from 'react'
import { connect } from 'react-redux'
import {AnimalCard } from '../AnimalCard/AnimalCard'
import './AnimalContainer.css'


class AnimalContainer extends Component {
  
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



export default connect(mapStateToProps)(AnimalContainer);