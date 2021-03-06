import React from 'react'
import { connect } from 'react-redux'
import {AnimalCard } from '../AnimalCard/AnimalCard'
import './AnimalContainer.css'


const AnimalContainer = ({animals, isLoading, error}) =>  {
  
  
    const buildAnimalCards = animals.map(animal => {
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
          <h1 className='headline'>Protect the animals!</h1>
          {isLoading && 
          <p>Please wait while we load this up</p>
          }
          {error && 
          <p>{error}</p>
          }
        </header>
        <section className='card-container'>
        {buildAnimalCards}
        </section>
      </section>
    )
  }


export const mapStateToProps = (state) => ({
  animals: state.animals,
  isLoading: state.isLoading,
  error: state.error
})



export default connect(mapStateToProps)(AnimalContainer);