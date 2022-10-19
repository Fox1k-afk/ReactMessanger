import React, { useState } from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Navigate } from 'react-router-dom';
import { Form, Formik, Field } from 'formik';
import SendButton from '../Login/SendButton';

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map((d) => (
		<DialogItem name={d.name} key={d.id} id={d.id} />
	));

	let messagesElements = state.messages.map((m) => (
		<Message message={m.message} key={m.id} />
	));

	if (!props.isAuth) return <Navigate to='/login' />;

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>

			<div className={s.messages}>
				<div>{messagesElements}</div>
				<NewMessageForm sendNewMessage={props.sendMessage} />
			</div>
		</div>
	);
};

const NewMessageForm = (props) => {
	const [textValue] = useState({ msgText: '' });

	function addNewMsg(values) {
		props.sendNewMessage(values);
	}
	return (
		<Formik
			initialValues={textValue}
			onSubmit={(values) => {
				addNewMsg(values.msgText);
				values.msgText = '';
			}}
		>
			<Form>
				<div>
					<Field
						type='textarea'
						name='msgText'
						component='textarea'
						placeholder='Enter ur msg'
					/>
				</div>
				<div>
					<SendButton />
				</div>
			</Form>
		</Formik>
	);
};

export default Dialogs;
