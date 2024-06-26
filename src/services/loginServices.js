/** @format */

import getAxiosInst from './axios';

const API_SUB_ENDPOINT = '/auth';

export const loginApi = ({ username, password }) => {
	var data = {
		email: username,
		password: password,
		// publicaddress: address,
	};
	return getAxiosInst().post(`${API_SUB_ENDPOINT}/login`, data);
};
export const registerApi = ({ email,name, password,phoneNo }) => {
console.log(email,'email');
	var data = {
		email: email,
		password: password,
    fullName:name,
    phoneNo:phoneNo
		// publicaddress: address,
	};
	return getAxiosInst().post(`${API_SUB_ENDPOINT}/register`, data);
};

// export const getMessageApi = () => {
//   return getAxiosInst().get(`/product/get-all-product`);
// };
