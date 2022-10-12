const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const INITIAL_STATE = {
	posts: [
		{ id: 1, message: 'Hi, how are you', likes: '33' },
		{ id: 2, message: `It's my first post`, likes: '7' },
	],
	newPostText: 'omagad',
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

		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
	return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
export default profileReducer;
