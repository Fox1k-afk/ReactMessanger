import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const INITIAL_STATE = {
	users: [],
	pageSize: 5,
	totalUsersCount: 23,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					return u.id === action.userId ? { ...u, followed: true } : u;
				}),
			};

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					return u.id === action.userId ? { ...u, followed: false } : u;
				}),
			};

		case SET_USERS:
			return { ...state, users: action.users };

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage };

		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id !== action.userId),
			};

		default:
			return state;
	}
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));

	const data = await usersAPI.getUsers(currentPage, pageSize);

	dispatch(toggleIsFetching(false));
	dispatch(setUsers(data.items));
};

const followUnfollowFlow = async (
	dispatch,
	userId,
	apiMethod,
	actionCreator
) => {
	dispatch(toggleFollowingProgress(true, userId));

	const res = await apiMethod(userId);

	if (res.data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
	let apiMethod = usersAPI.follow.bind(usersAPI);
	followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
};

export const unfollow = (userId) => async (dispatch) => {
	let apiMethod = usersAPI.unfollow.bind(usersAPI);
	followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
};

export default usersReducer;
