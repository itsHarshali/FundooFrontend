<template>
 
    <div>
  
 <md-autocomplete
            id="search1"
            class="search"
           type="search"
            :md-options="employees"
            md-layout="box"
             v-model="searchKey"            
          > 
            <label>
              
 <!-- @click="searchToNotes()"  -->
            
              <md-icon>search</md-icon>Search...
            </label>
  </md-autocomplete>

   <!--  <div class="md-autocomplete">
    <md-icon>search</md-icon>
  <input   
      type="search"
       id="search1"
        class="search"
         md-layout="box"
      placeholder="Search"
      aria-label="Search"
      v-model="searchKey"
      @click="searchToNotes()"
    />
   
  </div> -->

   </div>
</template>
<script>
import { HTTP } from "../http-common";
import { messageService } from './messageService';

export default {
  name: "Search",
     
  components: {
   
  },
    // props: ["getAllNotes"],
  data: () => ({
    searchKey: null,
       getAllNotes:[],
    employees: [
    //  " this.getAllNotes",
    ]
  }),
  updated() {
    this.searchFunction();
  },

  methods: {
     sendMessage(value) {
            // send message to subscribers via observable subject
            messageService.sendMessage(value);
        },
    searchFunction() {
      this.$log.info("SearchKey dfdf " + this.searchKey);
      HTTP.get('/search/'+this.searchKey, {
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          // this.$log.info("test", JSON.stringify(response.data.data));
          // const data =JSON.stringify(response.data.data);
          //JSON. stringify() method converts a  JavaScript object or value to a JSON string
          //  this.$log.info("getall notes data from backend =>"+JSON.stringify(response.data));
            this.getAllNotes=response.data.data;
           this.sendMessage(this.getAllNotes);
           this.$log.info("getall trash notes data  =>"+JSON.stringify(this.getAllNotes));
          // alert("get all notes succesfully ",response.data.data);
        })
        .catch(e => {
          this.$log.info("error", e);
          // alert("add description", e);
        });
    },
    searchToNotes(){
       this.$router.push("/dashboard/search");
        // <router-link :to="{path:'/dashboard/search' }" replace> </router-link> 
    }
  }
};
</script>
<style lang="scss" scoped>
.md-autocomplete {
  max-width: 700px;
  -webkit-text-fill-color: #6f6f6f;
}
#search1 {
  //  margin-left: 90px;
  // background-color: rgb(216, 216, 216);
  background-color: #eeeeee;
  //      padding: 11px 0;
  height: 46px;
  padding: 0;
  margin-left: 56px;
  margin-right: 49px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  -webkit-text-fill-color: #797979;
}

.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box label {
  -webkit-text-fill-color: #6f6f6f;
}

</style>