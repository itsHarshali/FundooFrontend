<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar >
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <img src="../assets/unnamed.png" alt="logo" class="img">
        <span class="md-title">Fundoo</span>

         <md-autocomplete
          class="search"
          v-model="selectedEmployee"
          :md-options="employees"
          md-layout="box">
          <label>Search...</label>
        </md-autocomplete>

         <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>  
          </md-button>  
          <md-button class="md-icon-button">           
             <md-avatar>
      <img src="../assets/images (1).png" alt="Avatar">
         </md-avatar>
          </md-button>
        </div>

      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Notes</span>
          </md-list-item>

          <md-list-item>
            <md-icon>notification_important</md-icon>
            <span class="md-list-item-text">Reminders</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Label</span>  
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Edit Label</span>
          </md-list-item>

           <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Archive</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea.
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'PersistentFull',
    data: () => ({
      menuVisible: false,
      selectedEmployee: null,
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
      ]
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 400px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .page-container{
    background-color: #FFFFFF;
  }
   .search {
    max-width: 500px;
     background-color:rgb(179, 185, 185);
  
  }
  .md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box input{
     background-color:rgb(96, 105, 105);
  }
</style>