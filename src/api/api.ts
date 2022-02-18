
import axios from 'axios'

export const axiosInstance = axios.create({baseURL:'/'});

axiosInstance.interceptors.response.use(
    (res) => res,
    (err)=>console.log(err)
)


