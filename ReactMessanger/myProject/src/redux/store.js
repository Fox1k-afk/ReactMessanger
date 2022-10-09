import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you', likes: '33' },
				{ id: 2, message: `It's my first post`, likes: '7' },
			],
			newPostText: 'omagad',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Vladyslav' },
				{ id: 2, name: 'Chika' },
				{ id: 3, name: 'Miha' },
				{ id: 4, name: 'Bondar' },
				{ id: 5, name: 'Dima' },
				{ id: 6, name: 'Yakub' },
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you' },
				{ id: 3, message: 'Lets go somewhere' },
				{ id: 4, message: 'i Love Hookah' },
				{ id: 5, message: 'Captain Morgan' },
			],
			newMessageBody: '',
		},
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	},
};

export default store;
