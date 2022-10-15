import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/User-Avatar.png';
import axios from 'axios';

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
										axios
											.delete(
												`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
												{
													withCredentials: true,
													headers: {
														'API-KEY': '7439018c-c2d2-4071-b9b0-7c8695ec9a37',
													},
												}
											)
											.then((res) => {
												if (res.data.resultCode === 0) {
													props.unfollow(u.id);
												}
											});
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										axios
											.post(
												`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
												{},
												{
													withCredentials: true,
													headers: {
														'API-KEY': '7439018c-c2d2-4071-b9b0-7c8695ec9a37',
													},
												}
											)
											.then((res) => {
												if (res.data.resultCode === 0) {
													props.follow(u.id);
												}
											});
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
