import axios from 'axios'
import qs from 'qs'

// import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:7001';

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  // _.toast("错误的传参", 'fail');
  return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
  if(!res.data.success){
    // _.toast(res.data.msg);
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  // _.toast("网络异常", 'fail');
  return Promise.reject(error);
});

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default {
  /**
   * 获取公告列表
   */
  noticeList(params) {
    return fetch('/noticeList', params)
  },
  /**
   * 添加公告
   */
  insertNotice(params) {
    return fetch('/insertNotice', params)
  },
  /**
   * 删除公告
   * { noticeId: '6' }
   */
  delNotice(params) {
    return fetch('/delNotice', params)
  },
}
