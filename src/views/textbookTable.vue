<template>
  <el-table
    :data="textbookList"
    height='80vh'
    border
    style="width: 100%">
    <el-table-column
      prop="grade"
      align="center"
      label="年级"
      width="300">
    </el-table-column>
    <el-table-column
      prop="bookName"
      align="center"
      label="书名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="press"
      align="center"
      label="出版社">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["textbookList"]
};
</script>



