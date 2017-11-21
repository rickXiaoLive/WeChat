import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import MeHeader from '@/components/common/header'
import { Row,Col,Collapse,CollapseItem,Form,FormItem,Input,Button } from 'element-ui'

Vue.config.productionTip = false;
Vue.use(MintUI);
//let toPage = "errorPage";
let toPage = "user";
Vue.component('me-header',MeHeader);
Vue.use(Row);
Vue.use(Col);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate:function () {
    //开始载入loading...
    //此处发起微信网页授权返回结果给toPage

  },
  created:function () {
    //this.$store.dispatch('getMineBaseApi');//获取app基础信息
    //跳转到 toPage 页面
    this.$router.push(toPage);
    //结束载入loading..
  }
});
