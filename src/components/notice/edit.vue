<template>
  <div class="notice-edit">
    <mt-header fixed :title="$route.params.id == 'add'?'添加公告':'编辑公告'">
      <router-link to="/notice" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <el-form :model="noticeForm" :rules="rules" class="demo-ruleForm">
      <el-form-item label="" prop="title">
        <el-input placeholder="请输入公告标题" type="text" v-model="noticeForm.title" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="" prop="type" >
        <el-select v-model="noticeForm.typeValue" @change="changeValue" placeholder="请选择公告类型">
          <el-option
            v-for="item in noticeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="" prop="content">
        <el-input placeholder="请输入公告内容" :rows="4" v-model="noticeForm.content" type="textarea"></el-input>
      </el-form-item>

      <el-form-item class="form-button">
        <router-link to="/notice"><el-button >返回</el-button> </router-link>
        <el-button @click="submit()" type="primary" >提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import MeHeader from '@/components/common/header'
  import { mapGetters,mapActions } from 'vuex'

  export default {
    name: 'notice-edit',
    data() {
      return {
        noticeForm:{
          title: '',
          content: '',
          typeValue:'',
          noticeId:''
        },
        rules: {
          title: [
            { required: true, message: '请输入公告标题', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择公告类型', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请输入公告内容', trigger: 'blur' },
            { min: 3, max: 1000, message: '长度在 3 到 1000 个字符', trigger: 'blur' }
          ],
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.getNoticeType();
        if (vm.$route.params.id != 'add'){
          vm.initEdit(vm.$route.params.id);
        }
      })
    },
    computed: {
      ...mapGetters({
        noticeOptions: 'noticeTypes',
        list:'list'
      })
    },
    methods: {
      ...mapActions([
        'getNoticeType',
        'insertNotice',
        'edtiNotice'
      ]),
      changeValue(value){
        this.typeValue = value;
      },
      initEdit(index){
        this.noticeForm.title = this.list[index].title;
        this.noticeForm.content = this.list[index].content;
        this.noticeForm.typeValue = this.list[index].type;
        this.noticeForm.noticeId = this.list[index].id;
      },
      submit(){
        if(this.noticeForm.noticeId){
          //这里是编辑
          this.edtiNotice(this.noticeForm);
        }else {
          //这里是添加
          this.insertNotice(this.noticeForm);
        }
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notice-edit {
    padding-top: 50px;
  }

  .form-button {
    text-align: right;
  }
</style>
