import axios from 'axios'
import qs from 'qs'

// import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:7001';

//POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  // _.toast("错误的传参", 'fail');
  return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
  if (!res.data.success) {
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
  /*
   * 获取公告列表
   * 返回 ：{status:200,data:[
   {"id": 3, "title": "测试公告标题", "type": "3", "content": "测试公告内容", "isRead": false},
   {"id": 4,"title": "测试公告标题","type": "1","content": "测试公告内容","isRead": false},
   ....
   ]}
   */
  noticeList() {
    return fetch('/noticeList');
  },
  /*
   * 添加\编辑 公告
   *{id:ctx.id, title:ctx.title, content: ctx.content, type:ctx.type};  有id 为编辑  没有id 为添加
   *
   * 添加返回： {status:200,data:{id:ctx.id, title:ctx.title, content: ctx.content, type:ctx.type}}
   * 编辑返回： {status:200,data:'ok'}

   */
  setNotice(params) {
    return fetch('/setNotice', params);
  },
  /*
   * 删除公告
   * { noticeId: '6' }
   * 返回：
   * {status:200,data:'ok'}
   */
  delNotice(params) {
    return fetch('/delNotice', params);
  },
  /*
  * 获取公告类型列表
  * {status:200,data:[{"value": "1", "label": "通知"}, {"value": "2", "label": "提醒"}, ...]}
  * */
  getNoticeType() {
    return fetch('/getNoticeType');
  }
}
