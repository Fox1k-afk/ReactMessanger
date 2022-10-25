// import { getAuthUserData } from './authReducer';

// const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

// const INITIAL_STATE = {
// 	initialized: false,
// };

// const appReducer = (state = INITIAL_STATE, action) => {
// 	switch (action.type) {
// 		case INITIALIZED_SUCCESS:
// 			return {
// 				...state,
// 				initialized: true,
// 			};
// 		default:
// 			return state;
// 	}
// };
// debugger;
// export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// export const initializeApp = () => {
// 	return (dispatch) => {
// 		let promise = dispatch(getAuthUserData());

// 		Promise.all([promise]).then(() => {
// 			dispatch(initializedSuccess());
// 		});
// 	};
// };

// export default appReducer;
