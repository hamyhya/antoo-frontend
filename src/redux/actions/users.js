import http from '../../services/http';
import httpForm from '../../services/httpForm';
const ip = 'http://52.87.153.181:8080/';

const getUser = (param) => {
  const url = `${ip}user?${param}`;
  console.log(url);
  return {
    type: 'GETUSER',
    payload: http().get(url),
  };
};

const patchUser = (dataUser, token) => {
  const url = `${ip}profile`;
  return {
    type: 'PATCHUSER',
    payload: httpForm(token).patch(url, dataUser),
  };
};

const deleteUser = (id) => {
  const url = `${ip}user/${id}`;
  console.log(url);
  return {
    type: 'DELETEUSER',
    payload: http().delete(url),
  };
};

export {getUser, deleteUser, patchUser};
