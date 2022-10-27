import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/User-Avatar.png';

const User = ({ user, followingInProgress, unfollow, follow }) => {
	return (
		<div>
			<span>
				<div>
					<NavLink to={'/profile/' + user.id}>
						<img
							src={user.photos.small != null ? user.photos.small : userPhoto}
							className={styles.userPhoto}
							alt={user.id}
						/>
					</NavLink>
				</div>
				<div>
					{user.followed ? (
						<button
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								unfollow(user.id);
							}}
						>
							Unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								follow(user.id);
							}}
						>
							Follow
						</button>
					)}
				</div>
			</span>
			<span>
				<span>
					<div>Name: {user.name}</div>
					<div>Status: {user.status}</div>
				</span>
				{/* <span>
							<div>Country: {user.country}</div>
							<div>City: {user.city}</div>
						</span> */}
			</span>
		</div>
	);
};

export default User;
