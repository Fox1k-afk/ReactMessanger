import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
	let posts = [
		{ id: 1, message: 'Hi, how are you', likes: '33' },
		{ id: 2, message: `It's my first post`, likes: '7' },
	];

	let postsElements = posts.map((p) => (
		<Post message={p.message} likes={p.likes} />
	));

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<textarea></textarea>
			</div>
			<div>
				<button>Add post</button>
			</div>
			<div className={s.posts}>{postsElements}</div>
		</div>
	);
};
export default MyPosts;
