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
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you' },
				{ id: 3, message: 'Lets go somewhere' },
				{ id: 4, message: 'i Love Hookah' },
				{ id: 5, message: 'Captain Morgan' },
			],
			dialogs: [
				{ id: 1, name: 'Vladyslav' },
				{ id: 2, name: 'Chika' },
				{ id: 3, name: 'Miha' },
				{ id: 4, name: 'Bondar' },
				{ id: 5, name: 'Dima' },
				{ id: 6, name: 'Yakub' },
			],
		},
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('State changed');
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likes: 66,
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';

		this._callSubscriber(this._state);
	},

	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;

		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
};

export default store;
