import http from '../../services/http'
import { API } from 'react-native-dotenv'


const getPromo = (token, search, sort, page) => {
  return {
    type: 'GETPROMO',
    payload: http(token).get(`${API}promo?search=${search}&sort=${sort}&page=${page}`)
  }
}

export {getPromo};
