<template>
  <div>
    <md-dialog :md-active.sync="showEditNote" md-dynamic-height>
      <md-dialog-title>Edit note</md-dialog-title>  
<md-card>

      <div class="inputs">
        <input type="text" placeholder="Create new label" style="border:none; outline:none" />
      </div>

      <div class="inputs">
        <input type="text" placeholder="Create new label" style="border:none; outline:none" />
      </div>
      
          <div class="bottom">
          <md-dialog-actions>
        <md-button class="md-primary" @click="showEditNote = false">save</md-button>
      </md-dialog-actions>
              <div class="button">
                <iconComponent @changeColor="colorFromIcon()"></iconComponent>
              </div>   
          </div>
</md-card>
    </md-dialog>
    <!-- <md-button class="md-primary md-raised" @click="showEditNote = true">Show Dialog</md-button> -->
  </div>
</template>  
<script>
import iconComponent from "../components/iconComponent";
export default {
   name: "editNote",
  components: {
    iconComponent,
    // search
  },
  data: () => ({
    showEditNote: true
  })
};
</script>
<style scoped>
.md-dialog {
  height: 220px;
  width: 520px;
  display: flex;
  border-radius: 8px;
  /* z-index:-1 ; */
}
.inputs{
  padding: 5px;
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