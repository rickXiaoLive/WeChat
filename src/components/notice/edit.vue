<template>
  <div class="notice-edit">
    <mt-header fixed title="">
      <router-link to="/notice" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <el-form  class="demo-ruleForm">
      <el-form-item label="" prop="pass">
        <el-input placeholder="请输入公告标题" type="text" v-model="title" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="" prop="age">
        <el-input placeholder="请输入公告内容" :rows="4" v-model="content" type="textarea"></el-input>
      </el-form-item>
    </el-form>



  </div>
</template>

<script>
  import MeHeader from '@/components/common/header'
  export default {
    name: 'notice-edit',
    data() {
      return {
          title: '',
          content: ''
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notice-edit{
    padding-top: 50px;
  }
</style>
