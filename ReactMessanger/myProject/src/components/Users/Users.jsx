import Paginator from '../common/Preloader/Paginator/Paginator';
import User from './User';

const Users = ({
	currentPage,
	totalUsersCount,
	onPageChanged,
	pageSize,
	users,
	...props
}) => {
	return (
		<div>
			<Paginator
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				pageSize={pageSize}
				totalUsersCount={totalUsersCount}
			/>
			<div>
				{users.map((u) => (
					<User
						user={u}
						key={u.id}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
