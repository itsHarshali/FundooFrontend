<template>
  <div>
    <md-toolbar>
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
           <img src="../assets/unnamed.png" alt="logo" class="img">
          <h3 class="md-title">Fundoo</h3>
        </div>
        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">  
            <md-icon>refresh</md-icon>  
          </md-button>  
          <md-button class="md-icon-button">           
             <md-avatar>
      <img src="../assets/images (1).png" alt="Avatar">
    </md-avatar>
          </md-button>
        </div></div>     
    </md-toolbar>
    
  </div>
</template>

<script>
export default {
  name: 'RegularToolbar'
}
</script>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }
</style>
