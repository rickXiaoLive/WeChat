// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Row,Col} from 'element-ui'

Vue.config.productionTip = false;
Vue.use(MintUI);
//let toPage = "errorPage";
let toPage = "captain";
Vue.use(Row);
Vue.use(Col);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  beforeCreate:function () {
    //开始载入loading...
    //此处发起微信网页授权返回结果给toPage

  },
  created:function () {
    //跳转到 toPage 页面
    this.$router.push(toPage);
    //结束载入loading..
  }
});
