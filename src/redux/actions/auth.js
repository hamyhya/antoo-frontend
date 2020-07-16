import http from '../../services/http'
const ip = 'http://api.antoo.smeatech.com/'


const loginUser = (dataSubmit) => {
  return {
    type: 'LOGIN',
    payload: http().post(`${ip}auth/login`, dataSubmit)
  }
}

export {loginUser}