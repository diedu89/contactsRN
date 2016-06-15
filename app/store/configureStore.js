import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import devTools from 'remote-redux-devtools';
import rootReducer from '../reducers';

const defaultState = { 
	list:{	
		contacts: [
		],
		filter: ''
	}
};
const store = createStore(
	rootReducer, 
	defaultState,
	compose(
		applyMiddleware( thunkMiddleware ),
		devTools()
	)
);

export default store;