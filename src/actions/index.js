export const getAnimals = (animals) => ({
  type: 'GET_ANIMALS',
  animals
})

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
})

export const isLoading = (isLoading) => ({
  type: 'IS_LOADING',
  isLoading
})