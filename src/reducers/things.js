import { ADD_THING } from '../actions/index';

const INITIAL_STATE = { thing : null };

export default function(state = INITIAL_STATE, action) {
	switch(action.type){
		case ADD_THING:
		console.log(action.payload)
			return {...state, thing: action.payload };
		default:
			return state;
	}
}