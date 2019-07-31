export const getAnimals = (animals) => ({
  type: 'GET_ANIMALS',
  animals
})

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
})

export const getIsLoading = (isLoading) => ({
  type: 'GET_IS_LOADING',
  isLoading
})

export const getDonations = (donations) => ({
  type: 'GET_DONATIONS',
  donations
})