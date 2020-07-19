import http from '../../services/http'
import { API } from 'react-native-dotenv'


const loginUser = (dataSubmit) => {
  return {
    type: 'LOGIN',
    payload: http().post(`${API}auth/login`, dataSubmit)
  }
}
const registerUser = (dataSubmit) => {
  return {
    type: 'REGISTER',
    payload: http().post(`${API}auth/register`, dataSubmit)
  }
}
const verifyUser = (otp) => {
  return {
    type: 'REGISTER',
    payload: http().patch(`${API}auth/activation`, otp)
  }
}
const logout = () => {
  return {
    type: 'LOGOUT',
    payload: ''
  }
}
const forgot = (dataSubmit) => {
  return {
    type: 'REGISTER',
    payload: http().post(`${API}auth/forgot-password`, dataSubmit)
  }
}
const reset = (dataSubmit) => {
  return {
    type: 'REGISTER',
    payload: http().patch(`${API}auth/reset-password`, dataSubmit)
  }
}
const dataUser = (id, token) => {
  return {
    type: 'USERID',
    payload: http(token).get(`${API}user/${id}`)
  }
}

export {loginUser, registerUser, verifyUser, logout, forgot, reset, dataUser}