<template>
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

        

         
    <md-menu md-direction="top-start" >
      <md-button @click="selectColor()" md-menu-trigger class="md-icon-button" >
          <md-avatar>
            <img src="../assets/addcolor.svg" alt="Avatar" />         
          </md-avatar>
        </md-button>
        
      <md-menu-content>
        <div class="md-layout"> 
            <div v-for="color1 in colors" v-bind:key="color1">
              <div class="md-layout-item" @click="shareColor(color1.color)">
              <md-button class="md-icon-button " >
                <span class="color" :style="`background-color: ${color1.color}`" ></span>   
              </md-button>
            </div>
          </div>
        </div>
      </md-menu-content>
    </md-menu>
  

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
            <div>
              <md-card>
              </md-card>
            </div>
            <!-- <md-menu-item @click="sendMessage">
                  <span>Send a message</span>
                  <md-icon>message</md-icon>
            </md-menu-item>-->
            <md-menu-item @click="sendMessage">
              <span>Add label</span>
              <md-icon>message</md-icon>
            </md-menu-item>
         
          </md-menu-content>
        </md-menu>
      </div>
    </md-card-actions>
  </div>
</template>
<script>

export default {
  name: "iconComponent",
  // components: {
  //   notes,
  //   displayNote
  // },

  data: () => ({
    value: null,
     colorCard: false,
    colors: [
      { color: "#00ffff" },
      { color: "#7fffd4" },
      { color: "#f0ffff" },
      { color: "#f5f5dc" },
      { color: "#000000" },
      { color: "#0000ff" },
      { color: "#a52a2a" },
      { color: "#dc143c" }
    ],
   

  }),
  methods: {
    noop() {
      window.alert("noop");
    },
        selectColor() {
      this.$emit('changeColor',)
    }
  },
  toggleMenu() {
      this.colorCard = !this.colorCard;
      // this.$log.info("seen :: " + this.seen);
    },
    shareColor(color){
this.$log.info("selected color :: " +color);    }
  
};
</script>
<style lang="scss" scoped>
// .md-menu {
//   margin: 24px;
// }
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
.md-avatar img {
  display: flex;
  // margin-bottom: auto;
  width: 50%;
  height: 50%;
  display: block;
}
.img {
  color: #757575;
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
  // width: 496.859px;
  //width: 585.859px;
  width: 290.859px;

  -webkit-box-flex: 0;
}
.color {
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-right: 16px;
  border: 1px solid rgba(#000, 0.12);
}

.md-helper-text {
  display: flex;
  align-items: center;

  .color {
    width: 12px;
    height: 12px;
    margin-left: 4px;
  }
}
</style>