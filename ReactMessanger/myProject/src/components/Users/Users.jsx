import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/User-Avatar.png';

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div className={styles.pagesContainer}>
				{pages.map((p) => {
					return (
						<span
							className={props.currentPage === p ? styles.selectedPage : styles.pages}
							onClick={(e) => {
								props.onPageChanged(p);
							}}
						>
							{p}
						</span>
					);
				})}
			</div>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img
									src={u.photos.small != null ? u.photos.small : userPhoto}
									className={styles.userPhoto}
								/>
							</NavLink>
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id);
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id);
									}}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>Name: {u.name}</div>
							<div>Status: {u.status}</div>
						</span>
						{/* <span>
							<div>Country: {u.country}</div>
							<div>City: {u.city}</div>
						</span> */}
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
