<template>
  <div>
    <el-row class="tac">
        <el-col :span="4" style="min-height: 100vh;background:rgb(84,92,100)">
            <slider/>
        </el-col>
        <el-col :span="20" style='padding:20px;height:100vh'>
          <router-view/>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import slider from "./views/slider.vue";
import breadcrumb from "./views/breadcrumb.vue";


export default {
  name: "Home",
  components: {
    slider,
    breadcrumb,
  }
};
</script>

<style>
</style>
