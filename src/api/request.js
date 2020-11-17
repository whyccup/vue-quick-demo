import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // 不同域下的 XmlHttpRequest 响应，不论其 Access-Control-header 设置什么值，都无法为它自身站点设置 cookie 值，除非它在请求之前将 withCredentials 设为 true。
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (process.env.NODE_ENV === 'development') console.log(response) // debug时统一打印
    return response.data // 这里只返回了data，减少了不必要的数据传递
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default service
