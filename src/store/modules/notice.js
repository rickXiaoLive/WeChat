import api from '../../fetch/api'
const state = {
  list:[]
}

// getters
const getters = {
  list:state => state.list
}

// actions
const actions = {
  /**
   * 获取公告列表
   */
  getNoticeList({ commit }) {
    api.noticeList()
      .then(function (response) {
        commit('noticeList',response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  /**
   * 添加公告
   */
  insertNotice({commit},ctx){
    api.insertNotice(ctx.title,ctx.content)
      .then(function (response) {
        if(response.state != 200){
          console.log(response);
          return
        }
        commit('insertNotice',ctx)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  /**
   * 删除公告
   */
  delNotice({commit,state},index){
    const params = {noticeId :state.list[index].id}; //查出要删除公告的id
    api.delNotice(params)
      .then(function (response) {
        if(response.state != 200){
          console.log(response);
          return
        }
        commit('insertNotice',ctx)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

// mutations
const mutations = {
  noticeList(state,res){
    state.list = res.data;
  },
  insertNotice(state,ctx){
    state.list.unshift({ title: ctx.title, content: ctx.content, isRead: false });
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
