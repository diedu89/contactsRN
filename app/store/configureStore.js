import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import devTools from 'remote-redux-devtools';
import rootReducer from '../reducers';

const defaultState = { 
	list:{	
		contacts: [
			{id: 1, name: 'elsy', phone: 78585695},
			{id: 2, name: 'maria', phone: 453453434},
			{id: 3, name: 'diego', phone: 345345344},
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