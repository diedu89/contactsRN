export const FILTER = 'FILTER';

export function filter(text){
	return {
		type: FILTER,
		filter: text,
	}
}