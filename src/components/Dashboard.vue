<template>
  <div class="page-container">
    <md-app>
      <!-- <div class="tool"> -->
      <md-app-toolbar>
        <!-- v-if="!menuVisible" -->
        
        <md-button  class="md-icon-button " @click="toggleMenu">
          <md-icon>menu</md-icon>
        </md-button>
        <img src="../assets/unnamed.png" alt="logo" class="img" />
        <span class="md-title">Fundoo</span>
        <md-autocomplete
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
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-avatar>
              <img src="../assets/grid_view.svg" alt="Avatar" />
            </md-avatar>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>settings</md-icon>
          </md-button>

          <md-menu md-direction="bottom-start">
            <md-button md-menu-trigger class="md-icon-button">
              <md-avatar>
                <img src="../assets/logo.png"/>
              </md-avatar>
            </md-button>

            <md-menu-content class=c1>
              <md-menu-item>
                <md-button  class="md-icon-button">
                <md-avatar class="profile"> 
                <img src="../assets/logo.png"/>
               
              </md-avatar>
            </md-button>
            </md-menu-item>
              <md-menu-item v-model="name"> {{ name }}</md-menu-item> 
              <md-menu-item v-model="email"> {{ email }}</md-menu-item> 
               <md-divider> </md-divider>
              <md-menu-item><md-button>Sing Out</md-button></md-menu-item>            
            </md-menu-content>
          </md-menu>
        </div>
      
      </md-app-toolbar>
      <!-- </div> -->

        <md-app-drawer :md-active.sync="menuVisible" md-persistent="null">
        <md-list>
          <md-list-item >
            <md-icon>note</md-icon>
            <span class="md-list-item-text">Notes</span>
           
          </md-list-item>

          <md-list-item>
            <md-icon>notification_important</md-icon>
            <span class="md-list-item-text">Reminders</span>
          </md-list-item>

          <md-divider></md-divider>
          <md-subheader>LABELS</md-subheader>

          <md-list-item>
            <md-icon>edit</md-icon>
            <span class="md-list-item-text">Edit Label</span>
          </md-list-item>
          <md-divider></md-divider>

          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <!-- <md-icon><img src="../assets/archive.svg" alt="Avatar"></md-icon> -->
            <span class="md-list-item-text">Archive</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="container">
         
        <md-card></md-card>
        <noteComponent></noteComponent>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import noteComponent from "../components/noteComponent";

export default {
  name: "PersistentFull",
  components: {
    noteComponent,
    
  }, 
  data:()=>({
    menuVisible: false,
   email:"",
   name:"",
    selectedEmployee: null,
    employees: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Phyllis Lapin-Vance"
    ]
  }),
 mounted(){
   this.email=localStorage.getItem("emailid")
    this.name=localStorage.getItem("name")
 },
 methods: {
   
      toggleMenu () {
        this.menuVisible = !this.menuVisible
        this.$log.info('menuvisible :: ' +this.menuVisible)

      }
    }
  }
</script>

<style lang="scss" scoped>
.md-app {
  min-height: 600px;
  border: 1px solid rgba(#000, 0.12);
}
.md-app-toolbar {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}   
.md-app-drawer {
  margin-top: 88px;
}
.page-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #ffffff;
}
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

.md-card {
  margin: 4px;
  display: inline-block;
  vertical-align: top;

  //     box-sizing: border-box;
  // overflow: hidden;
  // position: relative;
  // border-radius: 8px;
  // background-color: #fff;
  // border-color: #e0e0e0;
}
.md-avatar img {
  display: flex;
  // margin-bottom: auto;
  width: 50%;
  height: 50%;
  display: block;
}
.md-menu {
  margin: 24px;
}
// .c1{
//   align-content: center
// }
.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box label{
  -webkit-text-fill-color: #6f6f6f;
}
.container{
    display: flex; 
  flex-wrap: wrap;
  justify-content: center;
    border: 1px solid transparent;
    //  width: 700px
    // margin:80px
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}
.md-app-toolbar{
   display: flex;
  // justify-content: space-between;
  flex-direction: row;
}
</style>