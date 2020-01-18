<template>
  <md-card>
    <md-card-header>
      <md-card-header-text >
         <input type="text" placeholder="Title" style="border:none; outline:none">
     
      </md-card-header-text>
    </md-card-header>

        <md-card-content>
             <input type="text" placeholder="Discription" style="border:none; outline:none">
            
        </md-card-content>
    <md-card-actions md-alignment="left">
      <md-button class="md-icon-button">
        <md-avatar>
          <img src="../assets/notification.svg" alt="Avatar" />
        </md-avatar>
      </md-button>


       <md-button class="md-icon-button">
        <md-avatar>
          <img src="../assets/addcolor.svg" alt="Avatar" />
        </md-avatar>
      </md-button>
       <md-button class="md-icon-button">
        <md-avatar>
          <img src="../assets/archive.svg" alt="Avatar" />
        </md-avatar>
      </md-button>
  

      <md-menu md-size="big" md-direction="bottom-end">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

      

        <md-menu-content>
          <md-menu-item @click="sendMessage">
            <span>Send a message</span>
            <md-icon>message</md-icon>
          </md-menu-item>
        </md-menu-content>
      </md-menu>
      
    </md-card-actions>
  </md-card>
</template>
<script>
export default {
  name: "notes",
  methods: {
    sendMessage() {
      window.alert("Send a message...");
    },
    doACall() {
      window.alert("Calling someone...");
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  letter-spacing: 0.00625em;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.5rem;
}
.md-card {
  width: 620px;
  height: 180px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  
}

.md-card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;

      width: $size;
      min-width: $size;
      height: $size;
      font-size: $size !important;
    }

    span {
      vertical-align: middle;
    }
  }

//   .card-reservation {
//     margin-top: 8px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     .md-icon {
//       margin: 8px;
//     }
//   }

  .md-button-group {
    display: flex;  

    .md-button {
      min-width: 60px;
      border-radius: 2px;
    }
  }
}

</style>