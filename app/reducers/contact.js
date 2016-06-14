import {
	SAVE_CONTACT,
	NEW_CONTACT,
	EDIT_CONTACT,
} from '../actions/contact'

export default function(state = {}, action){
	switch(action.type){
		case NEW_CONTACT:
		case SAVE_CONTACT:
			return {
				...state,
				id: null,
				name: '',
				phone: '',
			};
		case EDIT_CONTACT:
			return {
				...state,
				...action.contact
			};
		default:
		 return state;
	}
}