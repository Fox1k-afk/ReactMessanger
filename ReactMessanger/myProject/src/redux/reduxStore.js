import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer ';

const reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
