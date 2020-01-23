<template>
  <div class="note">
    <div v-if="seen==false" @click="toggleMenu" >

     <md-card class="take">
      <md-card-content>
        <input type="text" placeholder="Take a Note" style="border:none; outline:none" />
           <div class=b1>
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

    <form v-else  @submit.prevent="validateUser"> 
    <md-card>
      <md-card-header-text class="header">
        
        <input  v-model="title" type="text" placeholder="Title" style="border:none; outline:none"  :disabled="sending"/>
        <md-button class="md-icon-button">
          <md-avatar>
            <img src="../assets/pin.svg" alt="Avatar" />
          </md-avatar>
        </md-button>
      </md-card-header-text>

      <md-card-content>
        <input v-model="description" type="text" placeholder="Take a Note" style="border:none; outline:none" :disabled="sending" />
      
      </md-card-content>
      <div class="bottom">
        <md-card-actions md-alignment="left">
          <div class="button">
            <md-button class="md-icon-button">
              <md-avatar>
                <img src="../assets/notification.svg" alt="Avatar" />
              </md-avatar>
            </md-button>
            <md-button class="md-icon-button">
              <md-avatar>
                <img src="../assets/collaborator.svg" alt="Avatar" />
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
            <md-button class="md-icon-button">
              <md-avatar>
                <img src="../assets/undo.svg" alt="Avatar" />
              </md-avatar>
            </md-button>
            <md-button class="md-icon-button">
              <md-avatar>
                <img src="../assets/undo.svg" alt="Avatar" />
              </md-avatar>
            </md-button>
          </div>
          <div v-if="seen==true" @click="toggleMenu">
          <md-button type="submit"  id="btn1" @click="saveNote">close</md-button>
          </div>
        </md-card-actions>
      </div>
    </md-card>
        </form>
      <md-snackbar :md-active.sync="saveNote">The user {{ lastUser }} was saved with success!</md-snackbar>

  </div>
</template>
<script>
import { HTTP } from "../http-common";
export default {
  name: "notes",
  data: () => ({
    seen: false,
     title: "",
     description: "",
      sending: false,
  }),
  methods: {
        clearForm () {
        this.title = ""
        this.description = ""
      },
       saveNote() {
      this.sending = true;
      const noteData = {};
      noteData.title = this.title;
      noteData.description = this.description;

  this.$log.info('test', this.title)
 
      HTTP.post(`notes`, noteData,{headers:{token:localStorage.getItem("token")}})

        .then(response => {
           this.$log.info('test', response)
          const data = JSON.stringify(response.data);
          alert("note create succesfully ", data);
          this.sending=false
          this.clearForm()
        })
        .catch(e => {
          this.$log.info('test', e)
          alert("add description" , e);
          this.sending=false
          this.clearForm()
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
    },
  }
};
</script>
<style lang="scss" scoped>
.md-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 600px;
  height: 136px;
  margin: 4px;
  // display: inline-block;
  // vertical-align: top;
  border: 1px solid transparent;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

  // box-sizing: border-box;
  // overflow: hidden;
  // position: relative;
  // border-radius: 8px;
  // background-color: #fff;
  // border-color: #e0e0e0;
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

  //   .card-reservation {
  //     margin-top: 8px;
  //     display: flex;
  //     align-items: center;

  //     .md-icon {
  //       margin: 8px;
  //     }
  //   }
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
.bottom {
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
.button {
  display: flex;
  justify-content: flex-start;
  bottom: 0px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.54);
  direction: ltr;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 0;
  font-family: Roboto, arial, sans-serif;
  font-size: 12px;
  height: 34px;
  line-height: 26px;
  opacity: 1;
  transition-duration: 0.218s;
  transition-property: opacity;
  transition-timing-function: ease-in;
  width: 496.859px;
  -webkit-box-flex: 0;

  // opacity: 1;
  //     box-sizing: border-box;
  //     bottom: 0;
  //     display: flex;
  //     transition-duration: .218s;
  //     transition-timing-function: ease-in;
}
.close {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  // box-sizing: border-box;
  // color: rgba(0, 0, 0, 0.87);
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // letter-spacing: 0.01785714em;
  // font-family: "Google Sans", Roboto, Arial, sans-serif;
  // font-size: 0.875rem;
  // font-weight: 500;
  // line-height: 1.25rem;
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
// .pin{
//   width: 42px;
//     height: 36px;
//     float: right;
// }

// style="user-select: none;" aria-disabled="true"

.note {
  display: flex;
  justify-content: center;
}
.header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.take{
   display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 600px;
  height: 45px;
  margin: 4px;
  // display: inline-block;
  // vertical-align: top;
  border: 1px solid transparent;
  box-sizing: border-box;
 // overflow: hidden;
  position: relative;
  border-radius: 12px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

}
.b1{
  display: flex;
    justify-content:flex-end;
  margin-left: auto;
}
.img{
  color: #757575;
}
#title ,#description{
      width: 330px;
}
</style>




