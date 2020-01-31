<template>
       
          <md-autocomplete
            id="search1"
            class="search"
            :v-model="searchKey"
            :md-options="employees"
            md-layout="box"
      @click="searchFunction"
            
          >
            <label>
              <md-icon>search</md-icon>Search...
            </label>
          </md-autocomplete>
       
</template>
<script>
import { HTTP } from "../http-common";
export default {
      name: "Search",
      
  components: {
 
  },
     data: () => ({
    searchKey: null,
    employees: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Phyllis Lapin-Vance"
    ],
    showDialog: false,
    value: null,
  }),updated(){
          this.searchFunction()
      },
    methods: {

    searchFunction() {  
        this.$log.info("SearchKey dfdf "+this.searchKey);
      HTTP.get(`search`+this.searchKey, { headers: { token: localStorage.getItem("token") } })
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
}
</script>
<style lang="scss" scoped>

.md-autocomplete {
  max-width: 700px;
  -webkit-text-fill-color: #6f6f6f;
}
#search1 {
  //  margin-left: 90px;
  // background-color: rgb(216, 216, 216);
  background-color: #e2e0e0;
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