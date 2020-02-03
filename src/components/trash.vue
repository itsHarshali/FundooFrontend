<template>
  <div> 
    <displayTrash :getAllNotes="getAllNotes"></displayTrash>
  </div>
</template>
<script>                                                      
import displayTrash from "../components/displayTrash";
import { HTTP } from "../http-common";
export default {
  name: "getAllNotes",
  components: { 
    displayTrash
  },
 
  data: () => ({
    getAllNotes:[],

  }),
  mounted() {
    this.getAllNote()
  },
 
  methods: {
    getAllNote() {  
      HTTP.get(`trash`, { headers: { token: localStorage.getItem("token") } })
        .then(response => {
          // const data = JSON.stringify(response.data);
          //JSON. stringify() method converts a  JavaScript object or value to a JSON string
        //  this.$log.info("getall notes data from backend =>"+JSON.stringify(response.data));
         this.getAllNotes= response.data.data
         this.$log.info("getall trash notes data  =>"+JSON.stringify(this.getAllNotes));
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