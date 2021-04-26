 import axios from '../utils/axios'
 export function processList(data:any) {
  return axios({
    url: '/processPool/selectProcessPoolList',
    method: 'post',
    data
  })
}