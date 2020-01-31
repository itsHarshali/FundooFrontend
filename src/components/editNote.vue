<template>  
    <form @submit.prevent="validateUser">
      <md-card>
        <md-card-header-text class="header">
          <input
            v-model="title"
            type="text"
            placeholder="Title"
            style="border:none; outline:none"
            :disabled="sending"
          />
          <md-button class="md-icon-button">
            <md-avatar>
              <img src="../assets/pin.svg" alt="Avatar" />
            </md-avatar>
          </md-button>
        </md-card-header-text>

        <md-card-content>
          <input
            v-model="description"
            type="text"
            placeholder="Take a Note"
            style="border:none; outline:none"
            :disabled="sending"
          />
        </md-card-content>
        <div class="btm">
          <div v-if="seen==true" @click="toggleMenu">
            <md-button type="submit" id="btn1" @click="saveNote">close</md-button>
          </div>
          <iconComponent></iconComponent>
        </div>
      </md-card>
    </form>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>