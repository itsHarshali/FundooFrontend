<template>
  <div class="bottom">
    <md-card-actions md-alignment="left">
      <div class="button">
        <md-menu md-size="big" md-direction="bottom-end">

        <md-button  title="Remind me" class="md-icon-button" md-menu-trigger>
          <md-avatar>
            <img src="../assets/notification.svg" alt="Avatar" />
          </md-avatar>
        </md-button>

  <md-menu-content>
 <label> pick date and time</label>
           <md-menu-item >       
           
               <md-datepicker v-model="selectedDate"  />
   </md-menu-item>
            <md-menu-item @click="time(true)">
              <span>Set Time</span>
              <md-icon>access_time</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-button        
          title="Collaborator"
          class="md-icon-button" 
          @click="showCollaboratorDialog = true ; getAllUsers() "
        >
          <md-avatar>
            <img src="../assets/collaborator.svg" alt="Avatar" />
          </md-avatar>
        </md-button>

        <md-dialog :md-active.sync="showCollaboratorDialog" md-dynamic-height>
          <md-dialog-title>Collaborators</md-dialog-title>
          <md-divider></md-divider>

          <div class="c1 md-layout">
            <div class="md-layout-item md-size-10">
              <md-button class="md-icon-button">
                <md-avatar class="profile md-large">
                  <img src="../assets/rose.jpeg" />
                  <uploadProfile></uploadProfile>
                </md-avatar>
              </md-button>
            </div>
            <div class="md-layout-item md-size-90">
              <div class="md-layout">
                <span>
                  {{ name }}
                  <i>(Owner)</i>
                </span>
              </div>
              <div class="md-layout">{{ email }}</div>
            </div>
          </div>

          <div class="inputs md-layout">
            <div class="md-layout-item md-size-10">
              <md-button class="md-icon-button" md-alignment="left">
                <md-avatar>
                  <img src="../assets/collaborator.svg" alt="Avatar" />
                </md-avatar>
              </md-button>
            </div>
            <!-- <input
              type="text"            
              placeholder="Person or email to share with"
              style="border:none; outline:none"
              v-model="selectUser" 
              
            />-->
            <div class="md-layout-item md-size-90">
              <md-autocomplete
                :md-options="UsersEmail"
                md-layout="box"
                :md-open-on-focus="false"
                v-model="selectedUser"
              >
                <label>Person or email to share with</label>
              </md-autocomplete>
            </div>
          </div>

          <md-divider></md-divider>

          <div class="bottom dialogButton">
            <md-dialog-actions>
               <md-button @click="showCollaboratorDialog = false">Cancel</md-button>
              <md-button v-on:click="save()" @click="showCollaboratorDialog = false">save</md-button>
            </md-dialog-actions>
          </div>
        </md-dialog>

        <md-menu class="c1" md-direction="top-start">
          <md-button
            
            title="Change color"
            @click="selectColor(e)" 
            md-menu-trigger
            class="md-icon-button"
          >
            <md-avatar>
              <img src="../assets/addcolor.svg" alt="Avatar" />
            </md-avatar>
          </md-button>

          <md-menu-content class="colorcard">
            <div class="md-layout">
              <div v-for="color1 in colors" v-bind:key="color1.colorName">
                <div class="md-layout-item">
                  <md-button class="md-icon-button" @click="shareColor(color1.color)">
                    <span class="color" :style="`background-color: ${color1.color}`"></span>
                  </md-button>
                   <md-tooltip md-direction="bottom">{{ color1.colorName }}</md-tooltip>

                </div>
              </div>
            </div>
          </md-menu-content>
        </md-menu>

        <md-button  title="Archive" class="md-icon-button" @click="archive(true)">
          <md-avatar>
            <img src="../assets/archive.svg" alt="Avatar" />
          </md-avatar>
        </md-button>

        <md-menu md-size="big" md-direction="bottom-end">
          <md-button  title="More" class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>
          <md-menu-content>

           <md-menu-item >  
<md-menu md-align-trigger md-size="medium">
            <!-- <div @click.stop="stopTheEvent" md-menu-trigger>
              Add label
            </div> -->
             <span @click.stop="stopTheEvent" md-menu-trigger >Add label</span>    
              <md-icon>message</md-icon>
            <md-menu-content>
              <div>
              <div>Label note</div>
              <divider></divider>

              <div v-for="label in label.label" v-bind:key="label.label">
                <div>
                  {{ label.label }}
                </div>
              </div> 
            
              <md-menu-item class="closeLabel"> <button>Close</button></md-menu-item>
              </div>
            </md-menu-content>
          </md-menu>
        
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
import { HTTP } from "../http-common";
import { labelService} from "./messageService";


export default {
  name: "iconComponent",
  components: {
    // notes,
    // displayNote

  },

  data: () => ({
    value: null,
    selectedDate: null,
    selectedUser: "",
    colorCard: false,
    labelMenu: false,
    color: "",
    email: "",
    name: "",
    colorName:"",
    emailid: "",
    showCollaboratorDialog: false,
    colors: [
      { colorName: "Default", color: "#ffffff" },
      { colorName: "Red", color: "#f28b82" },
      { colorName: "Orange", color: "#f7bb04" },
      { colorName: "Yellow", color: "#FAF475" },
      { colorName: "Green", color: "#CCFF90" },
      { colorName: "Teal", color: "#a7ffeb" },
      { colorName: "Blue", color: "#cbf0f8" },
      { colorName: "Dark Blue", color: "#aecbfa" },
      { colorName: "Purple", color: "#d7aefb" },
      { colorName: "Pink", color: "#fdcfe8" },
      { colorName: "Brown", color: "#E6C9A8" },
      { colorName: "Gray", color: "#E8EAED" }
    ],
    UsersEmail: [],

    getAllUser: [],
     label:[]
  }),
    created() {
        // subscribe to home component messages
        this.$log.info("<<<label>>>")
        this.subscription = labelService.getAllLabel().subscribe(message => {
            //  this.label =  message.text;
               this.$log.info("<<<label this.label>>>", this.label)
                 if (message) {
                this.$log.info("message---->>>>", message);
                // add message to local state if not empty
                this.label=message.text;

            } else {
                 this.$log.info("else>>>>", message);
                // clear messages when empty message received
                this.messages = [];
            }
        });
    },
    
 
  mounted() {
    this.email = localStorage.getItem("emailid");
    this.$log.info("email>>>>>>>:::" + this.email);
    this.name = localStorage.getItem("name");

  },
  methods: {
    // stopTheEvent: (event) => event.stopPropagation() ,
       stopTheEvent: event => event.stopPropagation(),
    save(){
  this.$log.info("*********************");
    this.getAllUser.forEach(element => {   
      this.$log.info("test of email>>>collaboratorId >",this.selectedUser);
            if (element.emailid == this.selectedUser) {
              this.$log.info("test of email>>>c user_id >>", element._id);
              this.$emit("selectedUserId", element._id);
            }
          });
    },
    getAllUsers() {
      this.$log.info("test of getUsers");
      HTTP.get(`/allUser`)
        .then(response => {
          this.$log.info("test of getUsers", response.data.data);
          this.getAllUser = response.data.data;
          this.getAllUser.forEach(element => {
            this.$log.info("test of email", element.emailid);
            this.UsersEmail.push(element.emailid);
            // if (element.emailid == this.selectedUser) {
            //   this.$log.info("test of email>>>collaboratorId >",this.selectedUser);
            //   //this.$emit("selectedUser", element._id);
            // }
          });
        })  
        .catch(e => {
          this.$log.info("test", e);
        });
    },

    clearForm() {
      this.label = "";
    },
   
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
    },
    menu(){
      this.labelMenu=!this.labelMenu;
              
    }
    //  tM() {
    //   this.labelMenu = !this.labelMenu;
    //   // this.$log.info("seen :: " + this.seen);
    // },
    
  }
};
</script>
<style lang="scss" scoped>
// .md-menu-content-bottom-start .md-menu-content-small .md-menu-content .md-theme-default{
// z-index: 11;
// }
// .md-menu {
//   margin: 24px;
// }

.md-dialog {
  height: 240px;
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
.dialogButton {
  background-color: rgb(238, 238, 238);
}
</style>