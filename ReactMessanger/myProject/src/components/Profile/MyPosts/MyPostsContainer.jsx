import React from 'react';
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				const state = store.getState();

// 				const addPost = () => {
// 					store.dispatch(addPostActionCreator());
// 				};

// 				const onPostChange = (text) => {
// 					store.dispatch(updateNewPostTextActionCreator(text));
// 				};

// 				return (
// 					<MyPosts
// 						updateNewPostText={() => {
// 							onPostChange();
// 						}}
// 						addPost={addPost}
// 						posts={state.profilePage.posts}
// 						newPostText={state.profilePage.newPostText}
// 					/>
// 				);
// 			}}
// 		</StoreContext.Consumer>
// 	);
// };

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextActionCreator(text));
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
