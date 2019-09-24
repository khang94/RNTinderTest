import * as AxiosStatic from 'axios';
const axiosInstance = AxiosStatic.default.create({
  baseURL: 'https://randomuser.me/',
});

export const request = async (method, url, data) => {
  try {
    const req = {
      method,
      url,
      data,
    };
    const res = await axiosInstance(req);
    return res.data;
  } catch (err) {
    const error = {
      message: err.message,
      code: err.response && err.response.data && err.response.data.code,
      data: err.response && err.response.data,
      status: err.response && err.response.status,
    };
    return error;
  }
};

export const getUserAPI = async () => request('GET', 'api/0.4/', null);
