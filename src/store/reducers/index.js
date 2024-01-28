
import { combineReducers } from 'redux';
import courseReducer from './courseReducer'; // Import your course reducer here

const rootReducer = combineReducers({
  courses: courseReducer, 
  // Add other reducers as needed
});

export default rootReducer;
