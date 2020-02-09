<template>
  <div class="bottom">
    <md-card-actions md-alignment="left">
      <div class="button">
        <md-button class="md-icon-button">
          <md-avatar>
            <img src="../assets/notification.svg" alt="Avatar" />
          </md-avatar>
        </md-button>




        <md-button class="md-icon-button" @click="showCllaboratorDialog = true">
          <md-avatar>
            <img src="../assets/collaborator.svg" alt="Avatar" />
          </md-avatar>
        </md-button>

         <md-dialog :md-active.sync="showCllaboratorDialog" md-dynamic-height>
      <md-dialog-title>Collaborators</md-dialog-title>
      <md-divider></md-divider>

              <div class="c1 md-layout">     
                <md-layout>   
                 
                <md-button class="md-icon-button">
                  <md-avatar class="profile md-large">
                    <img src="../assets/rose.jpeg" />
                    <uploadProfile></uploadProfile>
                  </md-avatar>
                </md-button>
             <span> {{ name }}</span>
             <space/>
              {{ email }}
              </md-layout>
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
      
      <div class="bottom dialogButton">
        <md-dialog-actions>
          <md-button @click="showCllaboratorDialog = false">save</md-button>
          <md-button @click="showCllaboratorDialog = false">Cancel</md-button>
        </md-dialog-actions>
          </div>
    </md-dialog>





        <md-menu class="c1" md-direction="top-start">
          <md-button @click="selectColor(e)" md-menu-trigger class="md-icon-button">
            <md-avatar>
              <img src="../assets/addcolor.svg" alt="Avatar" />
            </md-avatar>
          </md-button>

          <md-menu-content class="colorcard">
            <div class="md-layout">
              <div v-for="color1 in colors" v-bind:key="color1">
                <div class="md-layout-item">
                  <md-button class="md-icon-button" @click="shareColor(color1.color)">
                    <span class="color" :style="`background-color: ${color1.color}`"></span>
                  </md-button>
                </div>
              </div>
            </div>
          </md-menu-content>
        </md-menu>

        <md-button class="md-icon-button" @click="archive(true)">
          <md-avatar>
            <img src="../assets/archive.svg" alt="Avatar" />
          </md-avatar>
        </md-button>

        <md-menu md-size="big" md-direction="bottom-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <!-- <div>
              <md-card> </md-card>
            </div>-->
            <md-menu-item>
              <span>Add label</span>
              <md-icon>message</md-icon>
            </md-menu-item>
            <md-menu-item @click="shareAddTrash(true)">
              <span>Delete note</span>
              <md-icon>delete</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </md-card-actions>
  </div>
</template>
<script>
export default {
  name: "iconComponent",
  // components: {
  //   notes,
  //   displayNote
  // },

  data: () => ({
    value: null,
    colorCard: false,
    color: "",
    email: "",
    name: "",
     showCllaboratorDialog: false,
    colors: [
      { name: "Default", color: "#ffffff" },
      { name: "Red", color: "#f28b82" },
      { name: "Orange", color: "#f7bb04" },
      { name: "Yellow", color: "#FAF475" },
      { name: "Green", color: "#CCFF90" },
      { name: "Teal", color: "#a7ffeb" },
      { name: "Blue", color: "#cbf0f8" },
      { name: "Dark Blue", color: "#aecbfa" },
      { name: "Purple", color: "#d7aefb" },
      { name: "Pink", color: "#fdcfe8" },
      { name: "Brown", color: "#E6C9A8" },
      { name: "Gray", color: "#E8EAED" },
    ]
    //     addTrash() {

    //   // this.$log.info("test",noteData);

    //   HTTP.put(`/trash/` + this.noteId,  {
    //     headers: { token: localStorage.getItem("token") }
    //   })
    //     .then(response => {
    //       this.$log.info("test2", response);
    //       // const data = JSON.stringify(response.data);
    //       //alert("note create succesfully ", data);
    //       // this.showSnackbar= true;

    //     })
    //     .catch(e => {
    //       this.$log.info("test", e);
    //       //alert("add description", e);
    //     });
    // }
  }),

  // mounted() {
  //     this.getAllNote();
  //   },
  mounted() {
    this.email = localStorage.getItem("emailid");
    this.$log.info("email>>>>>>>:::" + this.email);
    this.name = localStorage.getItem("name");
  },
  methods: {
    deleteNote() {},

    // selectColor(e) {
    //   this.$emit("changeColor", e.color);

    // },
    shareAddTrash(value) {
      this.$log.info("trash>>>>>>>:::" + value);
      this.$emit("Trash", value);
    },
    shareColor(color) {
      this.$log.info("selected color :: " + color);
      this.$emit("changeColor", color);
    },
    archive(value) {
      // this.$log.info("trash>>>>>>>:::"+ value)
      this.$emit("archive", value);
    },
    toggleMenu() {
      this.colorCard = !this.colorCard;
      // this.$log.info("seen :: " + this.seen);
    }
  }
};
</script>
<style lang="scss" scoped>
// .md-menu {
//   margin: 24px;
// }
.md-dialog {
  height: 220px;
  width: 520px;
  display: flex;
  border-radius: 8px;
}
.inputs {
  padding: 5px;
}
.md-button-group {
  display: flex;

  .md-button {
    min-width: 60px;
    border-radius: 1px;
    opacity: 1;
    flex: 1 0 auto;
    color: #202124;
    opacity: 0.71;
  }
}
.md-avatar img {
  display: flex;
  // margin-bottom: auto;
  width: 50%;
  height: 50%;
  display: block;
}
.img {
  color: #757575;
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
  margin-top: 4px;
  position: relative;
  transition-delay: 0s, 0s;
  transition-duration: 0.218s, 0.218s;
  transition-property: background-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out;

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
  // width: 496.859px;
  //width: 585.859px;
  width: 290.859px;

  -webkit-box-flex: 0;
}
.color {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid rgba(#000, 0.12);
}
.colorcard {
  height: 130px;
  display: flex;
  flex-wrap: wrap;
  height: 130;
  border-radius: 10px;
  width: 160px;
}
.md-helper-text {
  display: flex;
  align-items: center;
}
.c1 {
  border-radius: 8px;
}
.colorcard .color:hover {
    cursor: pointer;
        border-color: black;
 }
 .dialogButton{
   background-color:rgb(238, 238, 238);
 }
</style>