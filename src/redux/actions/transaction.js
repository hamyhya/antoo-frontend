import http from '../../services/http'
const ip = 'http://api.antoo.smeatech.com/'


const topup = (dataSubmit, token) => {
  return {
    type: 'TOPUP',
    payload: http(token).post(`${ip}transaction/top-up`, dataSubmit)
  }
}

export {topup}