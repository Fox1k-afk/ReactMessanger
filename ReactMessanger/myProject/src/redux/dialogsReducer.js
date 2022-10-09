const UPDATE_NEW_MESSAGE_BODY = 'newMessageBody';
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
	newMessageBody: '',
};

const dialogsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;

		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push({ id: 6, message: body });

		default:
			return state;
	}
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
});

export default dialogsReducer;
