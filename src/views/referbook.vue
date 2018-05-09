<template>
<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="高中教辅" name="1">
    <img class='bookImg' src="../assets/referbook_chuzhong1.png">
    <img class='bookImg' src="../assets/referbook_chuzhong2.png">
    <img class='bookImg' src="../assets/referbook_chuzhong3.png">
  </el-collapse-item>
  <el-collapse-item title="初中教辅" name="2">
    <div>啥也没有因为我懒得写哦。。。。。</div>
  </el-collapse-item>
  <el-collapse-item title="小学教辅" name="3">
    <img class='bookImg' src="../assets/referbook_xiaoxue1.png">
    <img class='bookImg' src="../assets/referbook_xiaoxue2.png">
    <img class='bookImg' src="../assets/referbook_xiaoxue3.png">
    <img class='bookImg' src="../assets/referbook_xiaoxue4.png">
    <img class='bookImg' src="../assets/referbook_xiaoxue5.png">
  </el-collapse-item>
  <el-collapse-item title="艺术教辅" name="4">
    <img class='bookImg' src="../assets/referbook_yishu1.png">
    <img class='bookImg' src="../assets/referbook_yishu2.png">
  </el-collapse-item>
</el-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>
<style scoped lang="less">
  .bookImg{
    width:200px;
    height:200px;
    padding-right:50px;
  }
</style>