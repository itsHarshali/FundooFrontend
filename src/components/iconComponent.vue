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
                <!-- <md-menu-item @click="sendMessage">
                  <span>Send a message</span>
                  <md-icon>message</md-icon>
                </md-menu-item> -->
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
  //   name: "iconComponent",
  // components: {
  //   notes,
  //   displayNote
  // },
 
  // data: () => ({
  //   getAllNotes:[],

  // }),
  
}
</script>
<style lang="scss" scoped>
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
.img{
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

</style>