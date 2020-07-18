import http from '../../services/http'
const ip = 'http://api.antoo.smeatech.com/'


const getPromo = (token) => {
  return {
    type: 'GETPROMO',
    payload: http(token).get(`${ip}promo`)
  }
}

export {getPromo}