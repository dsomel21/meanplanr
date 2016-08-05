/* TESTING PURPOSES... REMOTE LATER */
import { DO_THING } from '../actions/index';

export default function(state = [], action) {
	switch(action.type){
		case DO_THING:
			return [...state, 
				Object.assign([], action.payload)
			];
		default:
			return state;
	}
}
