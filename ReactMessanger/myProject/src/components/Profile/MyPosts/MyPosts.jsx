import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
	let postsElements = props.posts.map((p) => (
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
