import axios from 'axios'
import config from './config'
export default(url,data={},method="GET")=>{
  return new Promise((resolve,reject)=>{
      axios({
          url:config + url,
          data,
          method
      }).then(
        (res)=>{resolve(res.data)},
        (error)=>{reject(error)}
      )
  })
}