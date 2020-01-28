<template>
  <div class="page-container">
    <md-app>
      <!-- <div class="tool"> -->
      <md-app-toolbar>
        <!-- v-if="!menuVisible" -->
        
        <md-button  class="md-icon-button " @click="toggleMenu">
          <md-icon>menu</md-icon>
        </md-button>
        <img  src="../assets/unnamed.png" alt="logo" class="img" />
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
              
              <md-menu-item><md-button>
                 <router-link to="/">Sing Out</router-link> 
              </md-button></md-menu-item>            
            </md-menu-content>
          </md-menu>
        </div>
      
      </md-app-toolbar>
      <!-- </div> -->
        <md-app-drawer :md-active.sync="menuVisible" md-persistent="null">
        <md-list>
          <button @click='getNote()' class="md-list-item-text">
          <md-list-item >
            <md-icon>note</md-icon>
           Notes          
          </md-list-item>
         </button>

         <button class="md-list-item-text">
          <md-list-item>
            <md-icon>notification_important</md-icon>
            Reminders
          </md-list-item>
            </button>

          <md-divider></md-divider>
          <md-subheader>LABELS</md-subheader>

          <button class="md-list-item-text">
          <md-list-item>
            <md-icon>edit</md-icon>
            Edit Label
          </md-list-item>
          </button>
          <md-divider></md-divider>

          <button @click='getArchive()' class="md-list-item-text"> 
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <!-- <md-icon><img src="../assets/archive.svg" alt="Avatar"></md-icon> -->
           Archive
          </md-list-item>
          </button>

           <button @click='getTrash()'  class="md-list-item-text">
          <md-list-item>
            <md-icon>delete</md-icon>
           Trash
          </md-list-item>
          </button>

        </md-list>
      </md-app-drawer>
      <md-app-content class="container">
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
// import displayNote from "../components/displayNote";
export default {
  name: "PersistentFull",
  components: {
    // noteComponent,
    // displayNote,   
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
     this.getAllNote()
 },
 methods: {
   
      toggleMenu () {
        this.menuVisible = !this.menuVisible
        this.$log.info('menuvisible :: ' +this.menuVisible)

      },
      getTrash(){
        this.$router.push('/trash')
      },
         getArchive(){
        this.$router.push('/archive')
      },
         getNote(){
        this.$router.push('/notes')
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
  height: 64px;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}   
.md-app-drawer {
  margin-top: 64px;
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
.main{
  margin-left: 180px;
  display: flex;
}
.img{
  display: flex;
  width: fit-content;
}
.md-list button{
border: none;
background-color: #ffffff;
 color:#050101;
}
// .md-list button:hover {
//     cursor: pointer;
//     background-color: rgb(252, 239, 195);
//     border-radius: 8px;
  
// }
.md-list .h:hover ,button:hover {
    cursor: pointer;
    background-color:rgb(252, 239, 195);
    border-radius: 8px;
  
}
// .md-list .h:hover ,button:active {
//     cursor: pointer;
//     background-color:rgb(117, 96, 25);
//     border-radius: 8px;
  
// }
</style>