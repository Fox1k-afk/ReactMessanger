import { connect } from 'react-redux';
import {
	follow,
	setCurrentPage,
	setUsers,
	toggleIsFetching,
	unfollow,
} from '../../redux/usersReducer';
import Users from './Users';
import axios from 'axios';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
				{ withCredentials: true }
			)
			.then((res) => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(res.data.items);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
				{ withCredentials: true }
			)
			.then((res) => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(res.data.items);
			});
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	};
};

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	toggleIsFetching,
})(UsersContainer);
