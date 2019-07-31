import { combineReducers } from 'redux'
import { animalsReducer } from './animalsReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { hasErroredReducer } from './hasErroredReducer';

const rootReducer = combineReducers({
  animals: animalsReducer,
  isLoading: isLoadingReducer,
  error: hasErroredReducer
})

export default rootReducer