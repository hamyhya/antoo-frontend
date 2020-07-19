import http from '../../services/http';
const ip = 'http://52.87.153.181:8080/';

const getPromo = (token, search, sort, page) => {
  return {
    type: 'GETPROMO',
    payload: http(token).get(
      `${ip}promo?search=${search}&sort=${sort}&page=${page}`,
    ),
  };
};

export {getPromo};
