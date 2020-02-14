<template>
  <div >
    <md-dialog  :md-active.sync="showEditNote" md-dynamic-height  :style="`background-color: ${note.colorNote}`">
      <md-dialog-title>Edit note</md-dialog-title>  
      <div class="inputs1" >
        <input  class="inputs" type="text" v-model="title"  :style="`background-color: ${note.colorNote}`"/>
      </div>

      <div class="inputs1">
        <input class="inputs" type="text" v-model="description"  :style="`background-color: ${note.colorNote}`" />
      </div>
          <div class="bottom">
          <md-dialog-actions>
        <md-button class="md-primary" @click="showEditNote = false ;editNote()">save</md-button>
      </md-dialog-actions>
              <div class="button">
                <iconComponent @changeColor="colorFromIcon()"></iconComponent>
              </div>   
          </div>

    </md-dialog>
    <!-- <md-button class="md-primary md-raised" @click="showEditNote = true">Show Dialog</md-button> -->
  </div>
</template>  
<script>
import iconComponent from "../components/iconComponent";
import { HTTP } from "../http-common";
export default {
   name: "editNote",
  components: {
    iconComponent,
    // search
  },
  props: ["note"],
  data: () => ({
    showEditNote: true,
    title:null,
    description:null,
    noteId:"",
    color:null
  }),

  mounted(){
    this.noteId=this.note._id;
this.title=this.note.title;
this.description=this.note.description;
this.color=this.note.color;

  },
  methods:{
     getColor(color) {
      this.color = color;
      this.$log.info("note_color :: " + this.color);
    
    },
  editNote() { 
    this.$emit("closeDialog",false);
     const noteData = {};
      noteData.title = this.title;
      noteData.description = this.description;
      noteData.colorNote =this.color

      this.$log.info("test", this.title);
 this.$log.info("test noteid", this.noteId);
      HTTP.put(`/notes/` + this.noteId,noteData, {
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          this.$log.info("test2", response);
          this.$emit("getAll", null);
        })
        .catch(e => {
          this.$log.info("test", e);
        });
    },
  }
};
</script>
<style scoped>
.md-dialog {
  height: 220px;
  width: 520px;
  display: flex;
  border-radius: 8px;
  /* z-index: 6px; */
  /* z-index:-1 ; */
}
.inputs1{
  padding: 10px;
 
}
.inputs{
  border:none; 
  outline:none;
}
.bottom {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  direction: ltr;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  font-family: Roboto, arial, sans-serif;
  font-size: 12px;
  height: 36px;
  line-height: 26px;
  margin-bottom: 4px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 20px;
    position: relative;
  transition-delay: 0s, 0s;
  transition-duration: 0.218s, 0.218s;
  transition-property: background-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out;
  /* 
  
  position: relative;
  transition-delay: 0s, 0s;
  transition-duration: 0.218s, 0.218s;
  transition-property: background-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out;
  visibility: hidden;
} */
}
 .button {
  display: flex;
  justify-content: flex-start;
  bottom: 0px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.54);
  direction: ltr;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;
  font-family: Roboto, arial, sans-serif;
  font-size: 12px;
  height: 34px;
  line-height: 26px;
  opacity: 1;
  transition-duration: 0.218s;
  transition-property: opacity;
  transition-timing-function: ease-in;
  width: 229.859px;
  -webkit-box-flex: 0;
} 

</style>