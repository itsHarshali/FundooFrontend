<template>
  <div> 
    <notes @getAll="getAllNote"></notes>   
    <displayNote :getAllNotes="getAllNotes" @getAllNotes="onClickChild" @getAll="getAllNote"></displayNote>
  
  </div>
</template>
<script>
import notes from "../components/notes";                                                        
import displayNote from "../components/displayNote";
import { messageService } from './messageService';
// import search from "../components/search";
import { HTTP } from "../http-common";
export default {
  name: "noteComponent",
  components: {
    notes,
    displayNote,  
  }, 
  data: () => ({
    getAllNotes:[],
 
  }),

   created () {
        // subscribe to home component messages
        this.subscription = messageService.getMessage().subscribe(message => {
            if (message) {
                this.$log.info("message---->>>>", message);
                // add message to local state if not empty
                this.getAllNotes=message.text;

            } else {
                // clear messages when empty message received
                this.messages = [];
            }
        });
    },
    beforeDestroy () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    },
  mounted() {
    this.getAllNote()
  },
 
  methods: {
    getAllNote() {  
      HTTP.get(`notes`, { headers: { token: localStorage.getItem("token") } })
        .then(response => {
          // const data = JSON.stringify(response.data);
          //JSON. stringify() method converts a  JavaScript object or value to a JSON string
        //  this.$log.info("getall notes data from backend =>"+JSON.stringify(response.data));
         this.getAllNotes= response.data.data
         this.$log.info("getall notes data  =>"+JSON.stringify(this.getAllNotes));
          // alert("get all notes succesfully ",response.data.data);
        })
        .catch(e => {
          this.$log.info("error", e);
          // alert("add description", e);
        });
    },
    onClickChild (value) {
    this.$log.info(value); // someValue
    }
  }
};
</script>
<style scoped>
</style>