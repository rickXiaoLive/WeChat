<template>
  <div class="captain">
    <
    <el-row :gutter="10">
      <el-col :span="24">
        <patch title="公告" icon="tickets" size="normal" bgType="info"></patch>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <patch title="天表" icon="document" size="small" bgType="info"></patch>
      </el-col>
      <el-col :span="12">
        <patch title="天表" icon="document" size="small" bgType="warning"></patch>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="24">
        <patch title="气象" icon="star-off" size="large" bgType="primary"></patch>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="24">
        <patch title="今日线路" icon="share" size="large" bgType="primary"></patch>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Patch from '@/components/common/patch'

  export default {
    name: 'captain',
    data() {
      return {}
    },
    components: {
      Patch
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
</style>
