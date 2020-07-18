import http from '../../services/http'
const ip = 'http://api.antoo.smeatech.com/'


const getPromo = (token, search, sort, page) => {
  return {
    type: 'GETPROMO',
    payload: http(token).get(`${ip}promo?search=${search}&sort=${sort}&page=${page}`)
  }
}

export {getPromo}