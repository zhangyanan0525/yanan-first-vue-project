<template>
  <div>
    <div style='marginTop:30px'>
      <textBookForm
      :getTextbookList="getTextbookList"
      />
    </div>
    <div style='height:80vh;marginTop:40px'>
      <textBookTable 
        :textbookList="textbookList"
      />
    </div>
  </div>
</template>

<script>
import textBookForm from "./textbookForm.vue";
import textBookTable from "./textbookTable.vue";
import axios from 'axios';

export default {
  name: "textbook",
  data(){
    return{
      textbookList:[]
    }
  },
  components: {
    textBookForm,
    textBookTable
  },
  created() {
    this.getTextbookList();
  },
  methods: {
    getTextbookList(params) {
      axios
        .post("/api/getTextbookList", params||{})
        .then((res)=> {
          console.log(res);
          this.textbookList=res.data.data.map((item)=>{
            const temp=item;
            temp.grade=temp.grade+'年级'
            return temp
          });
        })
        .catch((error)=> {
          console.log(error);
        });
    }
  }
};
</script>

<style>

</style>

