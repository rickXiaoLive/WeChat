<template>
  <div class="patch"
       :class="[bgType,'size-'+size]"
       :style="{ backgroundColor: color }"
  >
    <p id="title-box">{{ title }}</p>
    <div id="icon-box">
      <i :class="['el-icon-'+icon]"></i>
    </div>

  </div>
</template>

<script>
  /**
   * patch
   * @module components/common/patch
   * @desc 贴片
   * @param {string} [type=primary] 组件样式，可选 primary, info, success, warning ,danger, purple
   * @param {string} [color] - 传入颜色值
   * @param {string} [size=normal] - 尺寸，接受 normal, small, large
   * @param {string} [icon=error] - 图标，接受 官网上的图标 http://element-cn.eleme.io/#/zh-CN/component/icon
   *
   * @example
   * <mt-badge color="error">错误</mt-badge>
   * <mt-badge color="#333">30</mt-badge>
   */
export default {
  name: 'patch',
  data:function () {
    return{}
  },
  props:{
    title:String,
    icon:{
      type:String,
      default: 'error'
    },
    bgType:{
      type: String,
      default: 'primary'
    },
    color: String,
    size:{
      type: String,
      default: 'normal'
    }
  }
};
</script>

<style scoped>
  .patch{
    float: left;
  }
  .primary{
    color: white;
    background-color: #3379B9;
    border-color: #2a6496;
  }
  .success{
    color: white;
    background-color: #45b6af;
    border-color: #3ea49d;
  }
  .info{
    color: white;
    background-color: #89c4f4;
    border-color: #72b8f2;
  }
  .warning{
    color: white;
    background-color: #dfba49;
    border-color: #dbb233;
  }
  .danger{
    color: white;
    background-color: #f3565d;
    border-color: #f13e46;
  }
  .purple{
    color: white;
    background-color: #8e44ad;
    border-color: #8b3dad;
  }
  .size-small{
    font-size: 20px;
    padding: 2px 1%;
    height: 100px;
    width: 98%;

  }
  .size-normal{
    font-size: 22px;
    padding: 2px 1%;
    height: 100px;
    width: 98%;
  }

  .size-large{
    font-size: 28px;
    padding: 2px 1%;
    height: 100px;
    width: 98%;
  }
  #title-box{
    float: left;
    margin-left: 4px;

  }
  #icon-box{
   float: right;
    margin-right: 4px;
    height: 100px;
    width: 50%;
    text-align: right;
  }
  #icon-box i{
    height: 100px;
    line-height: 100px;
    font-size: 3em;
  }

</style>
