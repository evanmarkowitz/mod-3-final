import React, { Component } from 'react'
import { fetchDonations } from '../../apiCalls.js'
import { connect } from 'react-redux'
import { getDonations, hasErrored, getIsLoading} from '../../actions'



class AnimalContainer extends Component {
  
  async componentDidMount() {
    try {
      let fetchedDonations = await fetchDonations()
      this.props.getDonations( fetchedDonations )
      this.props.getIsLoading(false) 
    } catch(error) {
      await this.props.hasErrored(error)
    }
  }

  render() {

    // const buildAnimalCards = this.props.animals.map(animal => {
    //   return <AnimalCard 
    //   name={animal.name} 
    //   img={animal.img} 
    //   species={animal.species} 
    //   description={animal.description} 
    //   id= {animal.id}
    //   key={animal.id}
    // />
    // })
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
        
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer);