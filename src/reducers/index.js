import { combineReducers } from 'redux'
import { animalsReducer } from './animalsReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { hasErroredReducer } from './hasErroredReducer';
import { donationsReducer } from './donationsReducer';

const rootReducer = combineReducers({
  animals: animalsReducer,
  isLoading: isLoadingReducer,
  error: hasErroredReducer,
  donations: donationsReducer
})

export default rootReducer