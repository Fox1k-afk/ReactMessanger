import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '7439018c-c2d2-4071-b9b0-7c8695ec9a37',
	},
});

export const usersAPI = {
	getUsers: (currentPage, pageSize) => {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`, {
				withCredentials: true,
			})
			.then((res) => res.data);
	},

	getAuthMe: () => {
		return instance
			.get(`auth/me`, {
				withCredentials: true,
			})
			.then((res) => res.data);
	},
};
