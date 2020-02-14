<template>
  <div>
    <md-dialog :md-active.sync="showDialog" md-dynamic-height>
      <md-dialog-title>Collaborators</md-dialog-title>
      <md-divider></md-divider>

 <div class="c1 md-layout">
             
                <md-button class="md-icon-button">
                  <md-avatar class="profile md-large">
                    <img src="../assets/logo.png" />
                    <uploadProfile></uploadProfile>
                  </md-avatar>
                </md-button>
             

              <md-menu-item v-model="name">{{ name }}</md-menu-item>
              <md-menu-item v-model="email">{{ email }}</md-menu-item>
 </div>
      <div class="inputs">
         <md-button class="md-icon-button "  md-alignment="left">
          <md-avatar>
            <img src="../assets/collaborator.svg" alt="Avatar" />
          </md-avatar>
        </md-button>
        <input
          type="text"
          placeholder="Person or email to share with"
          style="border:none; outline:none"
        />
      </div>
      <md-divider></md-divider>
      <div class="bottom">
        <md-dialog-actions>
          <md-button @click="showDialog = false">save</md-button>
          <md-button @click="showDialog = false">Cancel</md-button>
        </md-dialog-actions>

        <!-- <div class="button">
                <iconComponent @changeColor="colorFromIcon()"></iconComponent>
        </div>-->
      </div>
    </md-dialog>
    <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
  </div>
</template>  
<script>
export default {
  name: "editNote",
  components: {
    // search
  },
  data: () => ({
    showDialog: false
  })
};
</script>
<style scoped>
.md-dialog {
  height: 220px;
  width: 520px;
  display: flex;
  border-radius: 8px;
}
.inputs {
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