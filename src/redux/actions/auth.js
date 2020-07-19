import http from '../../services/http';
const ip = 'http://52.87.153.181:8080/';

const loginUser = (dataSubmit) => {
  return {
    type: 'LOGIN',
    payload: http().post(`${ip}auth/login`, dataSubmit),
  };
};
const registerUser = (dataSubmit) => {
  return {
    type: 'REGISTER',
    payload: http().post(`${ip}auth/register`, dataSubmit),
  };
};
const verifyUser = (otp) => {
  return {
    type: 'REGISTER',
    payload: http().patch(`${ip}auth/activation`, otp),
  };
};
const logout = () => {
  return {
    type: 'LOGOUT',
    payload: '',
  };
};
const forgot = (dataSubmit) => {
  return {
    type: 'REGISTER',
    payload: http().post(`${ip}auth/forgot-password`, dataSubmit),
  };
};
const reset = (dataSubmit) => {
  return {
    type: 'REGISTER',
    payload: http().patch(`${ip}auth/reset-password`, dataSubmit),
  };
};
const dataUser = (id, token) => {
  return {
    type: 'USERID',
    payload: http(token).get(`${ip}user/${id}`),
  };
};

export {loginUser, registerUser, verifyUser, logout, forgot, reset, dataUser};
