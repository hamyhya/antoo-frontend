import http from '../../services/http'
const ip = 'http://api.antoo.smeatech.com/'


const topup = (dataSubmit, token) => {
  return {
    type: 'TOPUP',
    payload: http(token).post(`${ip}transaction/top-up`, dataSubmit)
  }
}
const transfer = (dataSubmit, token) => {
  return {
    type: 'TRANSFER',
    payload: http(token).post(`${ip}transaction/transfer`, dataSubmit)
  }
}
const pln = (dataSubmit, token) => {
  return {
    type: 'PLN',
    payload: http(token).post(`${ip}transaction/payment/pln`, dataSubmit)
  }
}

export {topup, transfer, pln}