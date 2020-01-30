<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Select Profile Photo</md-dialog-title>

      <md-tabs md-dynamic-height>
      
        <md-tab md-label="Upload Photos">
          <input type="file" @change="onFileChanged">
            <button @click="onUpload">Upload!</button>  
         </md-tab>
  
        <md-tab md-label="your Photos">
  
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        </md-tab>

     
      </md-tabs>

      <md-dialog-actions>
         <md-button class="md-primary" @click="showDialog = false">Set as Profile Photo</md-button>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
  </div>
</template>

<script>
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: false
    }),

    methods: {
    
  // onFileChanged (event) {
  //   // const file = event.target.files[0]
  // },
  // onUpload() {
  //   // upload file
    
  // }
  
  }}
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>