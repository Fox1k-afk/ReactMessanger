import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const INITIAL_STATE = {
	posts: [
		{ id: 1, message: 'Hi, how are you', likes: '33' },
		{ id: 2, message: `It's my first post`, likes: '7' },
	],
	newPostText: 'omagad',
	profile: null,
	status: '',
};

const profileReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likes: 66,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		}

		case UPDATE_NEW_POST_TEXT: {
			return { ...state, newPostText: action.newText };
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile };
		}

		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}

		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return { type: ADD_POST };
};

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});

export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});

export const getUserProfile = (userId) => (dispatch) => {
	usersAPI.getProfile(userId).then((res) => {
		dispatch(setUserProfile(res.data));
	});
};

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then((res) => {
		dispatch(setStatus(res.data));
	});
};

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then((res) => {
		if (res.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	});
};

export const updateNewPostTextActionCreator = (text) => {
	return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export default profileReducer;
