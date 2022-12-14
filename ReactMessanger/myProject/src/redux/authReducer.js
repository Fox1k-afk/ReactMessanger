import { authAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

const INITIAL_STATE = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
	const data = await authAPI.me();

	if (data.resultCode === 0) {
		let { id, email, login } = data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};

export const login =
	(email, password, rememberMe = false) =>
	async (dispatch) => {
		const data = await authAPI.login(email, password, rememberMe);

		if (data.resultCode === 0) {
			dispatch(getAuthUserData());
		} else {
			alert('Incorrect Email or Password');
			//fix this
		}
	};

export const logout = () => async (dispatch) => {
	const data = await authAPI.logout();

	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};

export default authReducer;
