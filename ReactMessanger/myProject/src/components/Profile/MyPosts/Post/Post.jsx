import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg' />
			{props.message}
			<div>
				<span> Like {props.likes}</span>
			</div>
		</div>
	);
};
export default Post;
