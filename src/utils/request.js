import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import {
  Toast,
  Dialog
} from 'vant'

var msgInstance = null
let msgInstanceM = null
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (localStorage.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers.Authorization = `Bearer ${localStorage.token}`;

    }
    const url = config.url
    if (config.method === 'get') {
      url.indexOf('?') === -1 ? config.url = url + '?_=' + (new Date().getTime()) : config.url = url + '&_=' + (new Date().getTime())
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code === 10001) {
      quitLogin()
      return Promise.reject(new Error(res.message || 'Error'))
    }
    if (res.code !== 10000) {
      if (isMobile()) {
        msgInstanceM && msgInstanceM.clear()
        msgInstanceM = Toast({
          message: res.message || 'Error',
          type: 'fail'
        })
      } else {
        msgInstance && msgInstance.close()
        msgInstance = Message({
          message: res.message || 'Error',
          type: 'warning',
          duration: 5 * 1000
        })
      }

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    // console.log(error.response.data) // for debug
    if (error.response && (error.response.status === 401)) {
      quitLogin()
    } else {
      if (error.response) {
        if (isMobile()) {
          Toast({
            message: error.response.data ? error.response.data.message : error.message,
            type: 'fail'
          })
        } else {
          Message({
            message: error.response.data ? error.response.data.message : error.message,
            type: 'error',
            duration: 5 * 1000
          })
        }
      } else {
        if (isMobile()) {
          Toast({
            message: '网络错误，请检查网络连接',
            type: 'fail'
          })
        } else {
          Message({
            message: '网络错误，请检查网络连接',
            type: 'error',
            duration: 5 * 1000
          })
        }
      }
    }
    return Promise.reject(error)
  }
)
let isQuiting = false

function quitLogin() {
  if (isQuiting) return
  isQuiting = true
  isMobile() ? mobileQuitLogin() : MessageBox.confirm('您的登录信息已过期,请返回首页重新登录,或点击取消按钮留在当前页面', '确认登出', {
    confirmButtonText: '重新登录',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    localStorage.clear()
    window.location = '/'
    isQuiting = false
  }).catch(() => {
    isQuiting = false
    localStorage.clear()
  })
}

function mobileQuitLogin() {
  Dialog.confirm({
    title: '确认登出',
    message: '您的登录信息已过期,请返回首页重新登录,或点击取消按钮留在当前页面',
    confirmButtonText: '重新登录',
    cancelButtonText: '取消',
  }).then(() => {
    localStorage.clear()
    window.location = '/#/m/login'
    isQuiting = false
  }).catch(() => {
    isQuiting = false
    localStorage.clear()
  })
}

function isMobile() {
  return window.location.hash.indexOf('#/m') !== -1
}

export default service
