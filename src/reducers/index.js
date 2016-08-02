import { combineReducers } from 'redux';
import ThingsReducer from './things';

/* 
	Calls every child reducer into single state object... 
	Shape of state object, matches keys of passed REDUCERS
	Ex. "button"'s state will me managed by ButtonReducer, because so many events may create so many changes in state
			"list"'s state will change so much, so ListReducer can manage various changes of state 
*/

/* Just example an for now */
const rootReducer = combineReducers({
  things : ThingsReducer
});

export default rootReducer;
