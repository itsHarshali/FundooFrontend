<template>
 <div id="app">
  <!-- <registration></registration>
  <Login></Login> -->
   <nav>  <!-- activity process in one route -->
       <router-link to='/'></router-link>
        <router-link to='/Register'></router-link>
        <router-link to='/forgatePassword'></router-link>
        <router-link to='/ResetPassword'></router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
//import registration from './components/registration.vue'
//  import Login from './components/Login'

export default {
  name: 'app',
  components: {
  
  //Login
 
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
      color: #202124
  /* margin-top: 60px; */
}
</style>
