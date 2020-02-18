<template>
  <!-- <md-button class="md-primary md-raised" @click="active = true">Prompt</md-button>
  <span v-if="value">Value: {{ value }}</span>-->
  <div class="page-container" >
    <md-app>
      <!-- <div class="tool"> -->
      <md-app-toolbar class="md-layout">
        <!-- v-if="!menuVisible" -->
        <div class="md-layout-item md-size-5">
          <md-button class="md-icon-button" @click="toggleMenu">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
        <div class="md-layout-item md-size-5">
          <img src="../assets/unnamed.png" alt="logo" class="img" />
        </div>
        <div class="md-layout-item md-size-5">
          <span class="md-title">Fundoo</span>
        </div>
        <div class="md-layout-item md-size-50">
          <search></search>

        </div>

      
          <!-- <div class="md-toolbar-section-end"> -->
<!-- <div v-if="activeListView == false" @click="changeView">
          <md-avatar class="md-medium">
            <md-ripple>
              <img
                src="../assets/view_agenda-24px.svg"
             
                alt="people"
              />
              <md-tooltip md-direction="bottom">list view</md-tooltip>
            </md-ripple>
          </md-avatar>
        </div>
        <div v-else @click="changeView">
          <md-avatar class="md-medium">
            <md-ripple>
              <img
                src="../assets/grid_view.svg"
                style="height:25px;width:25px;"
                alt="people"
              />
              <md-tooltip md-direction="bottom">Grid view</md-tooltip>
            </md-ripple>
          </md-avatar>
        </div> -->
             <div class="md-layout-item md-size-25">
<div v-if="seenList==true" @click="listview" >
          <md-button class="md-icon-button">
            <md-avatar>
              <img src= "../assets/grid_view.svg" alt="Avatar" />
              <md-tooltip md-direction="bottom">Grid view</md-tooltip>
            </md-avatar>
            </md-button>
            </div>
            <div v-else @click="listview" >
            <md-button  class="md-icon-button">
            <md-avatar>
              <img src=  "../assets/listView.svg"  alt="Avatar" />
              <md-tooltip md-direction="bottom">List view</md-tooltip>
            </md-avatar>
          </md-button>
          </div>
          </div>
          <!-- <div class="md-layout-item md-size-5">
          <md-button class="md-icon-button">
            <md-icon>settings</md-icon>
          </md-button>
        </div> -->

        <div class="md-layout-item md-size-10" @click="showDialogUploadProfile = true">

<uploadProfile> </uploadProfile>
        </div>
      </md-app-toolbar>

      <!-- </div> -->
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="null">
        <md-content class="md-scrollbar">
          <md-list>
            <!-- @click="getNote()"  -->
            <button class="md-list-item-text">
              <router-link
                class="h1"
                class-active="active"
                :to="{path:'/dashboard/notes' }"  
                replace
              >
                <md-list-item class="link1">
                  <md-icon>note</md-icon>Notes
                </md-list-item>
              </router-link>
            </button>

            <button class="md-list-item-text">
              <router-link :to="{path:'/dashboard/reminder'}" replace>
                <md-list-item class="link1">
                  <md-icon>notification_important</md-icon>Reminders
                </md-list-item>
              </router-link>
            </button>

            <md-divider></md-divider>
            <md-subheader>LABELS</md-subheader>
            <div v-for="label in getAllLabel" v-bind:key="label">

              <button class="md-list-item-text">
                <md-list-item class="link1">
                  <md-icon>labels</md-icon>
                  {{label.label}}
                </md-list-item>
              </button>

            </div>

            <button @click="showDialog = true , menuVisible=false ,getLabels()" class="md-list-item-text">
              <md-list-item>
                <md-icon>edit</md-icon>Edit Label
              </md-list-item>
            </button>
            <div>
              <form @submit.prevent="validateUser">
                <md-dialog :md-active.sync="showDialog">
                  <md-dialog-title>Edit label</md-dialog-title>
                  <div class="md-layout">
                    <div class="md-layout-item">
                      <md-button class="md-icon-button" @click="clearForm()">
                        <md-avatar>
                          <img src="../assets/cut.svg" alt="Avatar" />
                        </md-avatar>
                      </md-button>

                      <input
                        v-model="label"
                        type="text"
                        placeholder="Create new label"
                        style="border:none; outline:none"
                     
                      />
                    </div>
                    <md-button class="md-icon-button" @click="saveLabel()">
                      <md-avatar>
                        <img src="../assets/done.svg" alt="Avatar" />
                      </md-avatar>
                    </md-button>
                  </div>
                  <div v-for="label in getAllLabel" v-bind:key="label">
                    <div class="md-layout aaaa">
                      <div @click="getLabelId(label._id);deleteLabel()">
                        <md-icon>delete</md-icon>
                      </div>
                      <div class="md-layout-item aa">
                        <input  class="inputs" type="text" v-model="label.label" style="border:none" @click="getLabelId(label._id) "  />
                        </div>
                    
                     <div class=" a" @click="getLabelId(label._id);labelfunction(label.label);editLabel()" >
                        <md-icon>done</md-icon>
                      </div>
                      </div>
                  </div>
                  <md-divider></md-divider>

                  <!-- <div  v-for="note in label" v-bind:key="note">
                  <span>  </span>
                  </div>-->
                  <md-divider></md-divider>
                  <md-dialog-actions>
                    <div @click="showDialog = false">
                      <md-button
                        type="submit"
                        class="md-primary"
                        @click="saveLabel() , getLabels()"
                      >Done</md-button>
                    </div>
                  </md-dialog-actions>
                </md-dialog>
              </form>
            </div>

            <md-divider></md-divider>
        
            <button class="md-list-item-text">
              <router-link :to="{path:'/dashboard/archive'}" replace>
                <md-list-item>
                  <md-icon>move_to_inbox</md-icon>
                  Archive
                </md-list-item>
              </router-link>
            </button>               
      

            <button class="md-list-item-text">
              <router-link :to="{path:'/dashboard/trash'}" replace>
                <md-list-item>
                  <md-icon>delete</md-icon>Trash
                </md-list-item>
              </router-link>
            </button>
          </md-list>
        </md-content>
      </md-app-drawer>
      <md-app-content class="container">
        <div class="main">
          <!-- <md-card></md-card>  -->
          <!-- <noteComponent></noteComponent> -->
          <router-view></router-view>
        </div>
      </md-app-content>
    </md-app>
    <md-snackbar
      :md-position="position"
      :md-duration="isInfinity ? Infinity : duration"
      :md-active.sync="showSnackbar"
      md-persistent
    >
      <span>Label Created succesfully!</span>
    </md-snackbar>
  </div>
</template>

<script>
// import noteComponent from "../components/noteComponent";
import uploadProfile from "../components/uploadProfile";
import search from "../components/search";
import { listView } from './messageService';
import { HTTP } from "../http-common";
import { labelService } from "./messageService";
export default {
  name: "PersistentFull",
  components: {
    // noteComponent,
    uploadProfile,
    search
  },

  data: () => ({
    seenList:false,
    menuVisible: false,
    label: "",
    label1:"",
    email: "",
    labelId:"",
    name: null,
    selectedEmployee: null,
    getAllLabel: [],
    employees: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Phyllis Lapin-Vance"
    ],
    showDialog: false,
    showDialogUploadProfile:false,
    value: null
  }),
  mounted() {
    this.email = localStorage.getItem("emailid");
    this.name = localStorage.getItem("name");
  
    // this.getAllNote();
    // this.getAllLabel();
  },
  methods: {
labelfunction(label){
  this.label1 =label
   this.$log.info("test", this.label);
},
stopTheEvent: (event) => event.stopPropagation() ,

    toggleMenu() {
      this.menuVisible = !this.menuVisible;
      this.getLabels();
      this.$log.info("menuvisible :: " + this.menuVisible);
    },
    clearForm() {
      this.label = "";
    },
    saveLabel() {
      // this.sending = true;
      const labelData = {};
      labelData.label = this.label;
      this.$log.info("test", this.label);

      HTTP.post(`/label`, labelData, {
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          this.$log.info("test", response);
          // const data = JSON.stringify(response.data);
          //alert("note create succesfully ", data);
          // this.sending = false;

          this.showSnackbar = true;

          this.clearForm();
        })
        .catch(e => {
          this.$log.info("test", e);
          //alert("add description", e);
          // this.sending = false;
          this.clearForm();
        });
    },
    editLabel() {
      // this.sending = true;
      const labelData = {};
      this.$log.info("test>>", this.label1);
      labelData.label = this.label1;
      

      HTTP.put(`/label/`+ this.labelId, labelData, {
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          this.$log.info("test", response);
          // const data = JSON.stringify(response.data);
          //alert("note create succesfully ", data);
          // this.sending = false;

          this.showSnackbar = true;

          this.clearForm();
        })
        .catch(e => {
          this.$log.info("test", e);
          //alert("add description", e);
          // this.sending = false;
          this.clearForm();
        });
    },
      deleteLabel() {
    
      HTTP.delete(`/label/`+ this.labelId,{
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          this.$log.info("test", response);
          // const data = JSON.stringify(response.data);
          //alert("note create succesfully ", data);
          // this.sending = false;

          this.showSnackbar = true;

          this.clearForm();
        })
        .catch(e => {
          this.$log.info("test", e);
          //alert("add description", e);
          // this.sending = false;
          this.clearForm();
        });
    },
    
 sendAllLabelMessage(value) {
             
            // send message to subscribers via observable subject
           labelService.sendAllLabelMessage(value);
                     this.$log.info("value...", value);

        },

    getLabels() {
      HTTP.get(`/label`, {
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          this.$log.info("test", response);
          this.getAllLabel = response.data.data;
           
           this.sendAllLabelMessage(this.getAllLabel);
          this.$log.info(
            "getall labels data  =>" + JSON.stringify(this.getAllLabel)
             
          );
        })
        .catch(e => {
          this.$log.info("test", e);
        });
    },

    
    // getTrash() {
    //   this.$router.push("trash");
    // },
    // getArchive() {
    //   this.$router.push("archive");
    // },
    // getNote() {
    //   this.$router.push("notes");
    // },
    //   getReminderNotes() {
    //   this.$router.push("reminder");
    // }
    toggle1() {
      this.seen1 = !this.seen1;
      this.$log.info("seen :: " + this.seen);
    },
    listview(){
this.seenList=!this.seenList;
 listView.enableListView(this.activeListView);
    },

    singOut() {
      localStorage.clear();
      this.$router.push("/");
    },
    labelFuction() {
      this.getAllLabel();
    },
    getLabelId(id){
      // this.$log.info("labelis>>.",id)
      this.labelId= id;
      this.$log.info("labelis>>.", this.labelId)
    }
  }
};
</script>
<style src="./Dashboard.scss" lang="scss" scoped/>


