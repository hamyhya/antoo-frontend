import axios from 'axios'

export default (token=null)=>{
  if(token){
    return axios.create({
      headers: {
        'Authorization': 'Bearer '.concat(token), 
        'Content-Type' : 'multipart/form-data'
      }
    })
  } else {
    return axios
  }
}