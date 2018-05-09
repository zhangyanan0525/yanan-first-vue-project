<template>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="年级">
  <el-select  v-model="formInline.grade" placeholder="年级">
      <el-option v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item" :label="item+'年级'" :value="item"></el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="书名">
    <el-input v-model="formInline.bookName" placeholder="书名"></el-input>
  </el-form-item>
  <el-form-item label="出版社">
    <el-input v-model="formInline.press" placeholder="出版社"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  props: ['getTextbookList'],
  data() {
    return {
      formInline: {
        grade: "",
        bookName: "",
        press: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!",this.formInline);
      this.getTextbookList(this.formInline)
    }
  }
};
</script>