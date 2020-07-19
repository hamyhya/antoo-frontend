import http from '../../services/http';
const ip = 'http://52.87.153.181:8080/';

const topup = (dataSubmit, token) => {
  return {
    type: 'TOPUP',
    payload: http(token).post(`${ip}transaction/top-up`, dataSubmit),
  };
};
const transfer = (dataSubmit, token) => {
  return {
    type: 'TRANSFER',
    payload: http(token).post(`${ip}transaction/transfer`, dataSubmit),
  };
};
const pln = (dataSubmit, token) => {
  return {
    type: 'PLN',
    payload: http(token).post(`${ip}transaction/payment/pln`, dataSubmit),
  };
};
const history = (token) => {
  return {
    type: 'HISTORY',
    payload: http(token).get(`${ip}transaction/history?limit=15`),
  };
};

export {topup, transfer, pln, history};
