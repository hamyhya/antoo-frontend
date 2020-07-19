import http from '../../services/http'
import { API } from 'react-native-dotenv'


const topup = (dataSubmit, token) => {
  return {
    type: 'TOPUP',
    payload: http(token).post(`${API}transaction/top-up`, dataSubmit)
  }
}
const transfer = (dataSubmit, token) => {
  return {
    type: 'TRANSFER',
    payload: http(token).post(`${API}transaction/transfer`, dataSubmit)
  }
}
const pln = (dataSubmit, token) => {
  return {
    type: 'PLN',
    payload: http(token).post(`${API}transaction/payment/pln`, dataSubmit)
  }
}
const history = (token) => {
  return {
    type: 'HISTORY',
    payload: http(token).get(`${API}transaction/history?limit=15`)
  }
}

export {topup, transfer, pln, history};
