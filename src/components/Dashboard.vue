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
                  </md-avatar>
                </md-button>

              </md-menu-item>
              
              <uploadProfile></uploadProfile>

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
            <router-link :to="{path:'/dashboard/notes' }" replace>  
            
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
                <md-button class="md-primary" @click="showDialog = false">Done</md-button>
              </md-dialog-actions>
            </md-dialog>
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
export default {
  name: "PersistentFull",
  components: {
    // noteComponent,
    uploadProfile,
    search,
  },

  data: () => ({
    menuVisible: false,
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
       singOut() {
         localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style src="./Dashboard.scss" lang="scss" scoped/>


