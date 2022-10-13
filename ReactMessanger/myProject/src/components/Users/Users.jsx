import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';

const Users = (props) => {
	const getUsers = () => {
		if (props.users.length === 0) {
			axios
				.get('https://6347f870db76843976b71a55.mockapi.io/api/users')
				.then((res) => {
					props.setUsers(res.data);
				});
		}
	};

	return (
		<div>
			<button onClick={getUsers}>Get Users</button>
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
