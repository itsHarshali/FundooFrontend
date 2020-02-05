<template>
  <div> 
    <displayNote :getAllNotes="getAllNotes"></displayNote>
  </div>
</template>
<script>                                                      
import displayNote from "../components/displayNote";
import { HTTP } from "../http-common";
export default {
  name: "getAllNotes",
  components: { 
    displayNote
  },
 
  data: () => ({
    getAllNotes:[],

  }),
  mounted() {
    this.getAllNote()
  },
 
  methods: {
         
    getAllNote() {  
      HTTP.get(`/allReminder`, { headers: { token: localStorage.getItem("token") } })
        .then(response => {
         this.$log.info("response.data.data.reminder",response.data.data);
         this.getAllNotes= response.data.data
         this.$log.info("getall trash notes data  =>"+JSON.stringify(this.getAllNotes));          
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