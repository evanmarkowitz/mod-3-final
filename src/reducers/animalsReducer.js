export const animalsReducer = (state =[], action ) => {
  switch(action.type) {
    case 'GET_ANIMALS':
      return action.animals
    default:
      return state
  }
}