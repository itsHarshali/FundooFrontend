<template>
  <!-- <md-button class="md-primary md-raised" @click="active = true">Prompt</md-button>
  <span v-if="value">Value: {{ value }}</span>-->
  <div class="page-container">
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

         <!-- <md-autocomplete
            id="search1"
            class="search"
            v-model="selectedEmployee"
            :md-options="employees"
            md-layout="box"
          >
            <label>
              <md-icon>search</md-icon>Search...
            </label>
          </md-autocomplete>
        -->
        </div>   

        <div class="md-layout-item md-size-25">
          <!-- <div class="md-toolbar-section-end"> -->
       
        
          <md-button class="md-icon-button">
            <md-avatar>
              <img src="../assets/grid_view.svg" alt="Avatar" />
            </md-avatar>
          </md-button>
        
          <md-button class="md-icon-button">
            <md-icon>settings</md-icon>
          </md-button>
        </div>
        <div class="md-layout-item md-size-10">
          <md-menu md-direction="bottom-start">
            <md-button md-menu-trigger class="md-icon-button">
              <md-avatar>
                <img src="../assets/logo.png" />
              </md-avatar>
            </md-button>

            <md-menu-content class="c1">
              <md-menu-item>
                <md-button class="md-icon-button">
                  <md-avatar class="profile md-large">
                    <img src="../assets/logo.png" /> 
                    <uploadProfile> </uploadProfile>
                  </md-avatar>
               
                </md-button>

              </md-menu-item>
              
              
              <md-menu-item v-model="name">{{ name }}</md-menu-item>
              <md-menu-item v-model="email">{{ email }}</md-menu-item>
              <md-divider></md-divider>
              <md-menu-item>  
                <md-button @click="singOut()" >
                  Sing Out
                </md-button>
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>



      </md-app-toolbar>
                                   
 
      <!-- </div> --> 
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="null">
        <md-list >
        <!-- @click="getNote()"  -->
          <button class="md-list-item-text">
            <router-link class="h1" class-active="active"  :to="{path:'/dashboard/notes' }" replace>  
            
            <md-list-item class="link1">
              <md-icon>note</md-icon>Notes
            </md-list-item>
            </router-link>
          </button>

          <button class=" md-list-item-text">
            <router-link :to="{path:'/dashboard/reminder'}" replace>  
            <md-list-item class="link1"> 
              <md-icon>notification_important</md-icon>Reminders
            </md-list-item>
            </router-link>
          </button>

          <md-divider></md-divider>
          <md-subheader>LABELS</md-subheader>
          <button @click="showDialog = true,menuVisible=false " class="md-list-item-text">
            <md-list-item>
              <md-icon>edit</md-icon>Edit Label
            </md-list-item>
          </button>
          <div>

          <form  @submit.prevent="validateUser">
            <md-dialog :md-active.sync="showDialog">
              <md-dialog-title>Edit label</md-dialog-title>
              <div class="md-layout">
                <div class="md-layout-item">
                  <md-button class="md-icon-button">
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

                <md-button class="md-icon-button">
                  <md-avatar>
                    <img src="../assets/done.svg" alt="Avatar" />
                  </md-avatar>
                </md-button>
              </div>
              <md-divider></md-divider>
              <md-dialog-actions>
                   <div @click="showDialog = false">
                <md-button type="submit" class="md-primary" @click="savelabel()">Done</md-button>
             </div>
              </md-dialog-actions>
            </md-dialog>
               </form>
          </div>

          <md-divider></md-divider>

          <button  class="md-list-item-text">
             <router-link :to="{path:'/dashboard/archive'}" replace>  
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <!-- <md-icon><img src="../assets/archive.svg" alt="Avatar"></md-icon> -->         
              Archive
            </md-list-item>
            </router-link>  
          </button>
<!-- @click="getTrash()"  -->

          <button  class="md-list-item-text">    
            <router-link :to="{path:'/dashboard/trash'}" replace>         
            <md-list-item>
              <md-icon>delete</md-icon>
               Trash 
            </md-list-item>   
               </router-link>      
          </button> 
       
        </md-list>
      </md-app-drawer>
      <md-app-content class="container ">
      
        <div class="main">
          <!-- <md-card></md-card>  -->
          <!-- <noteComponent></noteComponent> -->      
          <router-view></router-view>
       
      </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
// import noteComponent from "../components/noteComponent";
import uploadProfile from "../components/uploadProfile";
import search from "../components/search";
import { HTTP } from "../http-common";
export default {
  name: "PersistentFull",
  components: {
    // noteComponent,
    uploadProfile,
    search,
  },

  data: () => ({
    menuVisible: false,
    label: "",
    email: "",
    name: "",
    selectedEmployee: null,
    employees: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Phyllis Lapin-Vance"
    ],
    showDialog: false,
    value: null
  }),
  mounted() {
    this.email = localStorage.getItem("emailid");
    this.name = localStorage.getItem("name");
    this.getAllNote();
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
      this.$log.info("menuvisible :: " + this.menuVisible);
    },
     clearForm() {
      this.label = "";
    },
    saveLabel() {
      this.sending = true;
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
          this.sending = false;
           
          // this.showSnackbar= true;
  
          this.clearForm();
        })
        .catch(e => {
          this.$log.info("test", e);
          //alert("add description", e);
          this.sending = false;
          this.clearForm();
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
       singOut() {
         localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>
<style src="./Dashboard.scss" lang="scss" scoped/>


