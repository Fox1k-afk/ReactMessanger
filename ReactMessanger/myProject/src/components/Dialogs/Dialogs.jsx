import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
	let dialogs = [
		{ id: 1, name: 'Vladyslav' },
		{ id: 2, name: 'Chika' },
		{ id: 3, name: 'Miha' },
		{ id: 4, name: 'Bondar' },
		{ id: 5, name: 'Dima' },
		{ id: 6, name: 'Yakub' },
	];

	let messages = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you' },
		{ id: 3, message: 'Lets go somewhere' },
		{ id: 4, message: 'i Love Rain' },
		{ id: 5, message: 'Captain Morgan' },
	];

	let dialogsElements = dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messagesElements = messages.map((m) => <Message message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>

			<div className={s.messages}>{messagesElements}</div>
		</div>
	);
};

export default Dialogs;
