let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you', likes: '33' },
			{ id: 2, message: `It's my first post`, likes: '7' },
		],
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
};

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likes: 66,
	};
	state.profilePage.posts.push(newPost);
};

export default state;
