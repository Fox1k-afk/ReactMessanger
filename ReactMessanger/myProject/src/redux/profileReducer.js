import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const INITIAL_STATE = {
	posts: [
		{ id: 1, message: 'Hi, how are you', likes: '33' },
		{ id: 2, message: `It's my first post`, likes: '7' },
	],
	profile: null,
	status: '',
};

const profileReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.postText,
				likes: 66,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
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

export const addPostActionCreator = (postText) => {
	return { type: ADD_POST, postText };
};

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});

export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});

export const getUserProfile = (userId) => async (dispatch) => {
	const res = await profileAPI.getProfile(userId);

	dispatch(setUserProfile(res.data));
};

export const getStatus = (userId) => async (dispatch) => {
	const res = await profileAPI.getStatus(userId);

	dispatch(setStatus(res.data));
};

export const updateStatus = (status) => async (dispatch) => {
	const res = await profileAPI.updateStatus(status);

	if (res.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export default profileReducer;
