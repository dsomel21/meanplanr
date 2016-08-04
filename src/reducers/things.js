import { ADD_THING } from '../actions/index';

export default function(state = [], action) {
	switch(action.type){
		case ADD_THING:
		console.log(action.payload)
			return [...state, 
				// thing: action.payload };
				Object.assign([], action.payload)
			];
		default:
			return state;
	}
}