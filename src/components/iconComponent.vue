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
            <md-button class="md-icon-button" >
                       

              <md-avatar> <md-autocomplete v-model="value" :md-options="colors">
                <img src="../assets/addcolor.svg" alt="Avatar" />
                <template slot="md-autocomplete-item" slot-scope="{ item}">
        <span class="color" :style="`background-color: ${item.color}`"></span>
        <!-- <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text> -->
      </template>

      <!-- <template slot="md-autocomplete-empty" slot-scope="{ term }">
        No colors matching "{{ term }}" were found. <a @click="noop()">Create a new</a> one!
      </template> -->
            </md-autocomplete>
               
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
    name: "iconComponent",
  // components: {
  //   notes,
  //   displayNote
  // },
 
  data: () => ({
   value: null,
    colors: [
        { name: 'Aqua', color: '#00ffff' },
        { name: 'Aquamarine', color: '#7fffd4' },
        { name: 'Azure', color: '#f0ffff' },
        { name: 'Beige', color: '#f5f5dc' },
        { name: 'Black', color: '#000000' },
        { name: 'Blue', color: '#0000ff' },
        { name: 'Brown', color: '#a52a2a' },
        { name: 'Crimson', color: '#dc143c' },
    ]
  }),
     methods: {
      noop () {
        window.alert('noop')
      }
    }

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
.color {
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 16px;
    border: 1px solid rgba(#000, .12);
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