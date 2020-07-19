import http from '../../services/http';
import httpForm from '../../services/httpForm';
import {API} from 'react-native-dotenv';

const getUserById = (id, token) => {
  const url = `${API}user/${id}`;
  return {
    type: 'GETUSERID',
    payload: http().get(url),
  };
};

const getUser = (param) => {
  const url = `${API}user?${param}`;
  console.log(url);
  return {
    type: 'GETUSER',
    payload: http().get(url),
  };
};

const patchUser = (dataUser, token) => {
  const url = `${API}profile`;
  return {
    type: 'PATCHUSER',
    payload: httpForm(token).patch(url, dataUser),
  };
};

const deleteUser = (id) => {
  const url = `${API}user/${id}`;
  console.log(url);
  return {
    type: 'DELETEUSER',
    payload: http().delete(url),
  };
};

export {getUser, deleteUser, patchUser, getUserById};
