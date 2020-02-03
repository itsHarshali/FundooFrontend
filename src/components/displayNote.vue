<template>
  <div class="note">
    <div v-for="note in getAllNotes" v-bind:key="note">
      <!-- <div v-for="note in displayNote" v-bind:key="note">  -->
      <div class="card">
        <md-card md-dynamic-height>
          <md-card-header-text class="header">
            <div style="display:flex">{{note.title}}</div>
            <md-button class="md-icon-button bottom">
              <md-avatar>
                <img src="../assets/pin.svg" alt="Avatar" />
              </md-avatar>
            </md-button>
          </md-card-header-text>
          <md-card-content>
            <div>{{note.description}}</div>
          </md-card-content>
         
              <div v-if="note.labels.length!= 0"> 
                 <div v-for="note in note.labels.length"  v-bind:key="note"> 
                   
            <md-chip md-deletable>{{note.labels}}</md-chip>
          </div> 
          </div>
          <div v-if="note.reminder!= null">
            <md-chip md-deletable>{{note.reminder}}</md-chip>
          </div>
         
          <div class="bottom">
            <md-card-actions md-alignment="left">
              <div class="button">
                <iconComponent @changeColor="colorFromIcon()"></iconComponent>
              </div>
            </md-card-actions>
          </div>
        </md-card>
      </div>
    </div>
  </div>
 
</template>
<script>
import iconComponent from "../components/iconComponent";
import { HTTP } from "../http-common";
// import search from "../components/search";
export default {
  name: "notes",
  components: {
    iconComponent,
    // search
  },
  props: ["getAllNotes"],
  data: () => ({
    seen: false,
    getAllNotes: [],
  addColor() {
    
      const noteData = {};
      noteData.colorNote = this.color;
     
      this.$log.info("test", this.noteData);

      HTTP.put(`/colorNote`, noteData, {
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          this.$log.info("test", response);
          // const data = JSON.stringify(response.data);
          //alert("note create succesfully ", data);          
          // this.showSnackbar= true; 
        })
        .catch(e => {
          this.$log.info("test", e);
          //alert("add description", e);
       
        });
    }
    
  }),
  methods: {
    toggleMenu() {
      this.seen = !this.seen;
      this.$log.info("seen :: " + this.seen);
    }
  }
};
</script>
<style lang="scss" scoped>
// .trashnoted :hover .footerarea {
//   visibility: visible;

// }
.md-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

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
  visibility: hidden;
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
  width: 229.859px;
  -webkit-box-flex: 0;

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

// .note{
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//     border: 1px solid transparent;
//     //  width: 700px
//     // margin:80px
// }
.note {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 800px;
  // margin:80px
}
.header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
// .trashnoted :hover .footerarea {
//   visibility: visible;

// }
.card :hover .bottom {
  visibility: visible;
}
</style>




