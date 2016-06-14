export const NEW_CONTACT = 'NEW_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';

export function newContact(){
	return {
		type: NEW_CONTACT
	}
}

export function editContact(contact){
	return {
		...contact, 
		type: EDIT_CONTACT
	};
}