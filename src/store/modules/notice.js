import axios from 'axios'
// initial state
// shape: [{ id, quantity }]
const state = {
  list:[{title: "测试公告标题", content: "测试公告内容", isRead: false},
    {
      title: "测试公告标题",
      content: "测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容5757",
      isRead: false
    },
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false},
    {title: "测试公告标题", content: "测试公告内容", isRead: false}]
}

// getters
const getters = {
  list:state => state.list
}

// actions
const actions = {
}

// mutations
const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
