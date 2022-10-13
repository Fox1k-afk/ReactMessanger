import React from 'react';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const INITIAL_STATE = {
	users: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((u) => {
					return u.id === action.userId ? { ...u, followed: true } : u;
					// if (u.id === action.userId) {
					// 	return { ...u, followed: true };
					// }
					// return u;
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
			return { ...state, users: [...state.users, ...action.users] };

		default:
			return state;
	}
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
