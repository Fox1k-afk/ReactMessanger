import React from 'react';
import styles from './Users.module.css';
import axios from 'axios';

class Users extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://6347f870db76843976b71a55.mockapi.io/api/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`
			)
			.then((res) => {
				this.props.setUsers(res.data);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(
				`https://6347f870db76843976b71a55.mockapi.io/api/users?page=${pageNumber}&limit=${this.props.pageSize}`
			)
			.then((res) => {
				this.props.setUsers(res.data);
			});
	};

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<div>
				{pages.map((p) => {
					return (
						<span
							className={this.props.currentPage === p ? styles.selectedPage : ''}
							onClick={(e) => {
								this.onPageChanged(p);
							}}
						>
							{p}
						</span>
					);
				})}

				{this.props.users.map((u) => (
					<div key={u.id}>
						<span>
							<div>
								<img src={u.photos} className={styles.userPhoto} />
							</div>
							<div>
								{u.followed ? (
									<button
										onClick={() => {
											this.props.unfollow(u.id);
										}}
									>
										Unfollow
									</button>
								) : (
									<button
										onClick={() => {
											this.props.follow(u.id);
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
	}
}

export default Users;
