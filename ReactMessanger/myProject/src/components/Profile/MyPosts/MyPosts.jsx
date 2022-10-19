import React, { useState } from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Form, Formik, Field, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
import SendButton from '../../Login/SendButton';

const FORM_VALIDATION_SCHEMA = {
	postText: Yup.string().min(1).required('Write something'),
};

const MyPosts = (props) => {
	let postsElements = props.posts.map((p) => (
		<Post key={p.id} message={p.message} likes={p.likes} />
	));

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div className={s.posts}>{postsElements}</div>
			<AddNewPostForm onAddPost={props.addPost} />
		</div>
	);
};

const AddNewPostForm = (props) => {
	const [postTextValue] = useState({ postText: '' });

	function addNewPost(values) {
		props.onAddPost(values);
	}

	function getStyles(errors, fieldName) {
		if (getIn(errors, fieldName)) {
			return {
				border: '1px solid red',
			};
		}
	}

	function CustomInput({ field, form: { errors } }) {
		return (
			<div>
				<textarea {...field} style={getStyles(errors, field.name)} />
				<ErrorMessage
					name={field.name}
					component='div'
					style={{ color: 'crimson' }}
				/>
			</div>
		);
	}

	return (
		<Formik
			initialValues={postTextValue}
			validationSchema={Yup.object(FORM_VALIDATION_SCHEMA)}
			onSubmit={(values) => {
				addNewPost(values.postText);
				values.postText = '';
			}}
		>
			<Form>
				<div>
					<Field
						type='textarea'
						name='postText'
						component={CustomInput}
						placeholder='Enter ur post msg'
					/>
				</div>
				<div>
					<SendButton />
				</div>
			</Form>
		</Formik>
	);
};
export default MyPosts;
