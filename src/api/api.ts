
import axios from 'axios'

export const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    (res) => res,
    (err)=>console.log(err)
)
 