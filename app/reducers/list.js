import { FILTER } from '../actions/list'
import { SAVE_CONTACT } from '../actions/contact'

export default function(state = {}, action){
	switch(action.type){
		case SAVE_CONTACT:
			contacts = state.contacts.map( (contact) => (contact.id == action.contact.id) ? action.contact : contact );
			if(!action.id){
				action.contact.id = contacts[contacts.length - 1].id + 1;
				contacts = [...contacts, action.contact];
			}

			return {
				...state,
				contacts
			}
		case FILTER:
			return {
				...state,
				filter: action.filter
			};
		default:
		 return state;
	}
}