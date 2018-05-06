<template>
    <el-row class="tac">
        <el-col :span="4" style="min-height: 100vh;background:rgb(84,92,100)">
            <slider/>
        </el-col>
        <el-col :span="20">
          <router-view/>
        </el-col>
    </el-row>
</template>

<script>
import slider from "./views/slider.vue";

export default {
  name: "Home",
  components: {
    slider
  }
};
</script>

<style>
</style>
