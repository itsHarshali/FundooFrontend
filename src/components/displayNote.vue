<template>
  <div class=note>
    <!-- <div v-for="note in displayNote" v-bind:key="note">  -->
  <md-card>  
    <md-card-header-text class="header">
      <input type="text" placeholder="Title" style="border:none; outline:none" />
     <md-button class="md-icon-button">
          <md-avatar>
            <img src="../assets/pin.svg" alt="Avatar" />
          </md-avatar>
        </md-button>
    </md-card-header-text>
    <md-card-content>
      <input type="text" placeholder="Take a Note" style="border:none; outline:none" />
    </md-card-content>
    <div class="bottom">   
      <md-card-actions md-alignment="left">
       <div class=button>
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
       </div>
      </md-card-actions>
    </div>
  </md-card>
    </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "notes",
     props: [  
   // camelCase in JavaScript  
   'displayNote'  
   ] ,
    data:()=>({
    seen: false
    
    }),
  methods: {
    toggleMenu () {
        this.seen = !this.seen
        this.$log.info('seen :: ' +this.seen)

      },

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
.md-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
   width: 240px;
  height: 125px;
  margin: 4px;

  // display: inline-block;
  // vertical-align: top;
  border: 1px solid transparent;
  box-sizing: border-box;
   //overflow: hidden;
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
align-items:center;
color:rgba(0, 0, 0, 0.54);
direction:ltr;

flex-direction:row-reverse;
flex-wrap:wrap-reverse;
font-family:Roboto, arial, sans-serif;
font-size:12px;
height:36px;
line-height:26px;
margin-bottom:4px;
margin-left:0px;
margin-right:0px;
margin-top:4px;
position:relative;
transition-delay:0s, 0s;
transition-duration:0.218s, 0.218s;
transition-property:background-color, box-shadow;
transition-timing-function:ease-in-out, ease-in-out;

}
.button{
  display: flex;
  justify-content: flex-start;
  bottom:0px;
box-sizing:border-box;
color:rgba(0, 0, 0, 0.54);
direction:ltr;
flex-basis:auto;
flex-grow:1;
flex-shrink:0;
font-family:Roboto, arial, sans-serif;
font-size:12px;
height:34px;
line-height:26px;
opacity:1;
transition-duration:0.218s;
transition-property:opacity;
transition-timing-function:ease-in;
width: 229.859px;
-webkit-box-flex:0;

// opacity: 1;
//     box-sizing: border-box;
//     bottom: 0;
//     display: flex;
//     transition-duration: .218s;
//     transition-timing-function: ease-in;

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

.note{
  display: flex;
  justify-content: center;
    border: 1px solid transparent;
}
.header{
  display: flex;
  justify-content: space-between;
  flex-direction: row
}
</style>




