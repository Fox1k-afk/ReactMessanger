import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

let posts = [
	{ id: 1, message: 'Hi, how are you', likes: '33' },
	{ id: 2, message: `It's my first post`, likes: '7' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App dialogs={dialogs} messages={messages} posts={posts} />
	</React.StrictMode>
);

reportWebVitals();
