<template>
  <div>
    <md-menu md-direction="top-start">
      <md-button md-menu-trigger>Top Start</md-button>
      <md-menu-content>
        <div class="md-layout"> 
            <div v-for="color1 in colors" v-bind:key="color1">
              <div class="md-layout-item" >
              <md-button class="md-icon-button " >
                <span class="color" :style="`background-color: ${color1.color}`"></span>   
              </md-button>
            </div>
          </div>
        </div>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
export default {
  name: "Directions",
  data: () => ({
    value: null,
    colors: [
      { color: "#00ffff" },
      { color: "#7fffd4" },
      { color: "#f0ffff" },
      { color: "#f5f5dc" },
      { color: "#000000" },
      { color: "#0000ff" },
      { color: "#a52a2a" },
      { color: "#dc143c" }
    ]
  }),
  methods: {
    noop() {
      window.alert("noop");
    }
  }
};
</script>

<style lang="scss" scoped>
.md-menu {
  margin: 24px;
}
</style>