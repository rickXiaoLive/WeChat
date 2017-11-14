<template>
  <div class="hello">
    <mt-button @click.native="openToast">{{ msg }}</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'click'
    }
  },
  methods:{
    openToast(){
      Toast({
        message: '操作成功',
        iconClass: 'mintui mintui-success'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
