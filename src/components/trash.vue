<template>
  <div> 
    <displayNote :getAllTrash="getAllTrash"></displayNote>
  </div>
</template>
<script>                                                      
import displayNote from "../components/displayNote";
import { HTTP } from "../http-common";
export default {
  name: "getAllTrash",
  components: {
   
    displayNote
  },
 
  data: () => ({
    getAllTrash:[],

  }),
  
  mounted() {
    this.getAll()
  },

  methods: {
    getAllNote() {  
      HTTP.get(`trash`, { headers: { token: localStorage.getItem("token") } })
        .then(response => {
          // const data = JSON.stringify(response.data);
          //JSON. stringify() method converts a  JavaScript object or value to a JSON string
        //  this.$log.info("getall notes data from backend =>"+JSON.stringify(response.data));
         this.getAllTrash= response.data.data
         this.$log.info("getall trash notes data  =>"+JSON.stringify(this.getAllTrash));
          // alert("get all notes succesfully ",response.data.data);
        })
        .catch(e => {
          this.$log.info("error", e);
          // alert("add description", e);
        });
    }
  }
};
</script>
<style scoped>
</style>