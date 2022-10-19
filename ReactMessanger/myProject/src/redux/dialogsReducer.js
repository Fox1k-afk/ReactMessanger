const SEND_MESSAGE = 'SEND_MESSAGE';

const INITIAL_STATE = {
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
};

const dialogsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messages: [...state.messages, { id: 6, message: action.msgText }],
			};

		default:
			return state;
	}
};

export const sendMessageCreator = (msgText) => ({
	type: SEND_MESSAGE,
	msgText,
});

export default dialogsReducer;
