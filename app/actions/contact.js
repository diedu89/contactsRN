export const SAVE_CONTACT = 'SAVE_CONTACT';
export function saveContact(contact){
	return {
		type: SAVE_CONTACT,
		contact
	}
}

export const NEW_CONTACT = 'NEW_CONTACT';
export function newContact(){
	return {
		type: NEW_CONTACT
	}
}

export const EDIT_CONTACT = 'EDIT_CONTACT';
export function editContact(contact){
	return {
		type: EDIT_CONTACT,
		contact,
	};
}