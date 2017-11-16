<template>
  <div class="me-header">
    <mt-header fixed :title="title">
      <router-link :to="parentPath" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  /**
   * header
   * @module components/common/patch
   * @desc 头部导航
   * @param {string} [title] 组件样式，可选 标题
   * @param {string} [parentPath='/user'] - 父级路由地址
   *
   * @example
   * <me-header parentPath="/user" title="公告"></me-header>
   */
  export default {
    name: 'me-header',
    data() {
      return {}
    },
    props: {
      title: String,
      parentPath:{
        type:String,
        default: '/user'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
