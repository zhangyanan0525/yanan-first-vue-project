<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>读书</span>
        </template>
        <el-menu-item-group>
          <template slot="title">教育类书籍</template>
          <router-link :to="'/textbook'">
          <el-menu-item index="1-1">教材</el-menu-item>
          </router-link>
          <router-link :to="'/referbook'">
          <el-menu-item index="1-2">教辅</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <router-link :to="'/food'">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">饮食</span>
      </el-menu-item>
      </router-link>
      <router-link :to="'/style'">
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">穿着</span>
      </el-menu-item>
      </router-link>
      <router-link :to="'/life'">
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">生活</span>
      </el-menu-item>
      </router-link>
    </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>

</style>