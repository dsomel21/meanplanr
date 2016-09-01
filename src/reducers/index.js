import { combineReducers } from 'redux';
import food from './foodReducer';
import list from './listReducer';
import thing from './doThingreducer';

/* 
	Calls every child reducer into single state object... 
	Shape of state object, matches keys of passed REDUCERS
	Ex. "button"'s state will me managed by ButtonReducer, because so many events may create so many changes in state
			"list"'s state will change so much, so ListReducer can manage various changes of state 
*/

const rootReducer = combineReducers({
  // food : food
  food,
  thing,
  list,
});

export default rootReducer;
