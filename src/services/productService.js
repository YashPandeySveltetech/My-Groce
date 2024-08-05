/** @format */

import getAxiosInst from "./axios";

const API_SUB_ENDPOINT = "/product";

export const createProduct = ({data}) => {
  console.log(data, "data");
  return getAxiosInst().post(`${API_SUB_ENDPOINT}/add-product`), data;
};

export const getAllProduct = ({email, name, password, phoneNo}) => {
  return getAxiosInst().get(`${API_SUB_ENDPOINT}/get-all-product`);
};
// export const getMessageApi = () => {
//   return getAxiosInst().get(`/product/get-all-product`);
// };
