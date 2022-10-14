import React from 'react';
import styles from './Users.module.css';

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
							<img src={u.photos} className={styles.userPhoto} />
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
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.country}</div>
							<div>{u.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
