<template>
  <div class="note">
    <div v-if="seen==false" @click="toggleMenu">
      <md-card class="take">
        <md-card-content>
          <input type="text" placeholder="Take a Note" style="border:none; outline:none" />
          <div class="b1">
            <md-button class="md-icon-button">
              <md-avatar>
                <img src="../assets/list.svg" alt="Avatar" />
              </md-avatar>
            </md-button>
            <md-button class="md-icon-button">
              <md-avatar>
                <img src="../assets/image.svg" alt="Avatar" />
              </md-avatar>
            </md-button>
          </div>
        </md-card-content>
      </md-card>
    </div>

    <form v-else @submit.prevent="validateUser">
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
    <!-- <md-snackbar :md-active.sync="saveNote">The Note {{ lastUser }} was saved with success!</md-snackbar> -->
  <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span> note was saved with success!</span>
     
    </md-snackbar>
  </div>
</template>
<script>
import iconComponent from "../components/iconComponent";
import { HTTP } from "../http-common";
export default {
  name: "notes",
  components: {
    iconComponent
  },

  data: () => ({
    seen: false,
    title: "",
    description: "",
    sending: false,
    showSnackbar: false,
    position: 'center',
    duration: 4000,
    isInfinity: false
  }),
  methods: {
    clearForm() {
      this.title = "";
      this.description = "";
    },
 
    saveNote() {
      this.sending = true;
      const noteData = {};
      noteData.title = this.title;
      noteData.description = this.description;

      this.$log.info("test", this.title);

      HTTP.post(`notes`, noteData, {
        headers: { token: localStorage.getItem("token") }
      })

        .then(response => {
          this.$log.info("test", response);
          // const data = JSON.stringify(response.data);
          //alert("note create succesfully ", data);
          this.sending = false;
           
          this.showSnackbar= true;
  
          this.clearForm();
        })
        .catch(e => {
          this.$log.info("test", e);
          //alert("add description", e);
          this.sending = false;
          this.clearForm();
        });
    },
    toggleMenu() {
      this.seen = !this.seen;
      this.$log.info("seen :: " + this.seen);
    },
    sendMessage() {
      window.alert("Send a message...");
    },
    validateUser() {
      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.btm {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  direction: ltr;

  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  font-family: Roboto, arial, sans-serif;
  font-size: 12px;
  height: 36px;
  line-height: 26px;
  margin-bottom: 4px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 4px;
  position: relative;
  transition-delay: 0s, 0s;
  transition-duration: 0.218s, 0.218s;
  transition-property: background-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out;
}
.md-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 600px;
  height: 136px;
  margin: 4px;
  border: 1px solid transparent;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

}

.md-card-example {
  .md-subhead {
    .md-icon {
      $size: 12px;

      width: $size;
      min-width: $size;
      height: $size;
      font-size: $size !important;
    }

    span {
      vertical-align: middle;
    }
  }
  .md-button-group {
    display: flex;

    .md-button {
      min-width: 60px;
      border-radius: 1px;
      opacity: 1;
      flex: 1 0 auto;
      color: #202124;
      opacity: 0.71;
    }
  }
}
.close {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 36px;
  padding: 8px 24px;
  border-radius: 4px;
  margin-right: 15px;
}
.md-card-header-text {
  display: flex;
  justify-content: flex-start;
  min-height: 43px;
  padding: 10px 15px;
  transition: box-shadow 0.218s ease-in-out, background-color 0.218s ease-in;
  // letter-spacing: .00625em;
  line-height: 1.5rem;
}
.md-card-content {
  display: flex;
  justify-content: flex-start;
  color: #202124;
  font-size: 14px;
  line-height: 19px;
  min-height: 46px;
  padding: 4px 16px 12px 16px;
}
.md-avatar img {
  display: flex;
  // margin-bottom: auto;
  width: 50%;
  height: 50%;
  display: block;
}
.note {
  display: flex;
  justify-content: center;
  padding-bottom: 2%;
  padding-top: 2%;
}
.header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.take {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 600px;
  height: 45px;
  margin: 4px;
  border: 1px solid transparent;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}
.b1 {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}
.img {
  color: #757575;
}
#title,
#description {
  width: 330px;
}
</style>




