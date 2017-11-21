import api from '../../fetch/api'

const state = {
  list: [],
  noticeTypes: []
}

// getters
const getters = {
  list: state => state.list,
  noticeTypes : state => state.noticeTypes
}

// actions
const actions = {
  /**
   * 获取公告列表
   */
  getNoticeList({commit}) {
    api.noticeList()
      .then(function (response) {
        commit('noticeList', response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  /**
   * 添加公告
   */
  insertNotice({commit}, ctx) {
    const params = {title:ctx.title, content: ctx.content,type:ctx.type}; //添加一条公告，要传给后台的参数
    api.setNotice(params)
      .then(function (response) {
        if (response.status != 200) {
          console.log(response);
          return
        }
        commit('insertNotice', response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  /**
   * 编辑公告
   */
  edtiNotice({commit,state}, ctx) {
    const params = {id:state.list[ctx.noticeId].id, title:ctx.title, content: ctx.content, type:ctx.typeValue}; //编辑一条公告，要传给后台的参数
    api.setNotice(params)
      .then(function (response) {
        if (response.status != 200) {
          console.log(response);
          return
        }
        commit('editNotice', ctx)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  /**
   * 删除公告
   */
  delNotice({commit, state}, index) {
    const params = {noticeId: state.list[index].id}; //查出要删除公告的id
    api.delNotice(params)
      .then(function (res) {
        if (res.status != 200) {
          console.log(res);
          return
        }
        commit('delNotice', index)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  /**
   *获取公告类型
   *
   */
  getNoticeType({commit}) {
    api.getNoticeType()
      .then(function (res) {
        if (res.status != 200) {
          console.log(res);
          return
        }
        commit('setNoticeType',res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

// mutations
const mutations = {
  noticeList(state, res) {
    state.list = res.data;
  },
  insertNotice(state, {data}) {
    state.list.unshift(data);
  }
  ,
  delNotice(state, index) {
    state.list.slice(index);
  }
  ,
  setNoticeType(state, {data}) {
    state.noticeTypes = data;
  },
  editNotice(state,ctx){
    const updateItem = state.list[ctx.noticeId];
    updateItem.title  = ctx.title;
    updateItem.content  = ctx.content;
    updateItem.type = ctx.typeValue;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
