<template>
  <div class="notice">
    <me-header title="公告"></me-header>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="isLoadMore"
        infinite-scroll-distance="10"
      >
        <el-row class="row" v-for="(item,index) in list">
          <el-col :span="24">
            <el-row>
              <el-col :span="18">
                <div @click="showMessage(index)" class="notice-item">{{ item.title }}</div>
              </el-col>
              <el-col :span="6">
                <div @click="showMessage(index)" class="notice-item"><i
                  :class="item.isRead?'el-icon-success':'el-icon-info'"></i></div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <span v-if="loading">加载中...</span>
      </div>

    </mt-loadmore>
  </div>
</template>

<script>
  import MeHeader from '@/components/common/header'
  import {MessageBox} from 'mint-ui'

  export default {
    name: 'notice',
    data() {
      return {
        list: [{title: "测试公告标题", content: "测试公告内容", isRead: false},
          {title: "测试公告标题", content: "测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容测试公告内容5757", isRead: false},
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
          {title: "测试公告标题", content: "测试公告内容", isRead: false}
        ],
        allLoaded: true,
        loading: false,
        isLoadMore: false
      }
    },
    methods: {
      loadTop() {
        // ...加载更多数据
        this.list = [{title: "新添加的公告标题", content: "测试公告内容", isRead: false}, ...this.list];
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
        // 加载更多数据
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          this.list = [...this.list, {title: "下一条的数据", content: "测试公告内容", isRead: false}];
          this.loading = false;
        }, 1000);
      },
      showMessage(index) {
        //这里与后台交互将this.list[index].ID 设置为已读

        MessageBox(this.list[index].title, this.list[index].content);
        this.list[index].isRead = true;

      }
    },
    components: {
      MeHeader
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notice{
    padding-top: 30px;
  }
  .notice-item {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 23px;
    background: #45b6af;
    border: 1px solid #3ea49d;
    color: #fff;
  }

  .row {
    margin-top: 20px;
  }
</style>
