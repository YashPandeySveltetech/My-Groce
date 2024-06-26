/** @format */

import getAxiosInst from './axios';

const API_SUB_ENDPOINT = '/category';

export const loginApi = ({ username, password }) => {
	var data = {
		email: username,
		password: password,
		// publicaddress: address,
	};
	return getAxiosInst().post(`${API_SUB_ENDPOINT}/login`, data);
};
export const createCotegory = ({}) => {
console.log('call hua');
	return getAxiosInst().get(`${API_SUB_ENDPOINT}/add-category`);
};
export const getCotegoryList = () => {
	console.log('call hua');
		return getAxiosInst().get(`${API_SUB_ENDPOINT}/get-category`);
	};
export const getSubCotegoryList = () => {
		console.log('call hua');
			return getAxiosInst().get(`${API_SUB_ENDPOINT}/get-sub-category`);
		};

