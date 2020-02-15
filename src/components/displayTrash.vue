<template>
  <div class="note">
    <div v-for="note in getAllNotes" v-bind:key="note">
      <!-- <div v-for="note in displayNote" v-bind:key="note">  -->
      <div class="card" @getAll="forUpdateNotes">
        <md-card
          v-if="seen==false"
          md-dynamic-height
          :style="`background-color: ${note.colorNote}`"
        >
          <md-card-header-text class="header">
            <div style="display:flex">{{note.title}}</div>
          </md-card-header-text>
          <md-card-content>
            <div>{{note.description}}</div>
          </md-card-content>

          <div class="md-layout" v-if="note.labels!==null">
            <div v-for="note in note.labels" v-bind:key="note.labels">
              <md-chip md-deletable>{{note.label}}</md-chip>
            </div>
          </div>
       

          <div class="bottom">
            <md-card-actions md-alignment="left">
              <div class="button" >
                <md-button class="md-icon-button" @click="getNoteId(note._id);deleteNote();">
                  <md-avatar>
                    <img src="../assets/foreverTrash.svg" alt="Avatar" />
                  </md-avatar>
                </md-button>
                <md-button class="md-icon-button" @click="getNoteId(note._id);restoreNote();">
                  <md-avatar>
                    <img src="../assets/restoreTrash.svg" alt="Avatar" />
                  </md-avatar>
                </md-button>
              </div>
            </md-card-actions>
          </div>
        </md-card>
      </div>
    </div>
  </div>
</template>
<script>
// import iconComponent from "../components/iconComponent";
import { HTTP } from "../http-common";
// import search from "../components/search";
export default {
  name: "notes",
  components: {
    // iconComponent,
    // search
  },
  props: ["getAllNotes"],
  data: () => ({
    seen: false,
    getAllNotes: [],
    noteId: "",
  }),

  methods: {
  
    restoreNote() {
      this.$log.info("test2", this.noteId);
      const token=localStorage.getItem("token");
      const auth = {
        headers: { token:token  }
      }
      HTTP.put(`/restoreNote/` + this.noteId,{},auth)
        .then(response => {
          this.$log.info("test2", response);
            this.$emit('getAll',null)
          // this.noteId=null;
        })
        .catch(e => {
          this.$log.info("test >>", e);        
        });
    },
     deleteNote() {
      this.$log.info("test2", this.noteId);
     
      HTTP.delete(`/notes/` + this.noteId, {
        headers: { token: localStorage.getItem("token") }
      })
        .then(response => {
          this.$log.info("test2", response);
            this.$emit('getAll',null)
          // this.noteId=null;
        })
        .catch(e => {
          this.$log.info("test >>", e);
          
        });
    },
    toggleMenu() {
      this.seen = !this.seen;
      this.$log.info("seen :: " + this.seen);
    },
      forUpdateNotes(response){
  this.res = response;
      this.$log.info("response :: " + this.res);
    },
     getNoteId(id) {
      this.$log.info("id :: " + id);
      this.noteId = id;
      this.$log.info("id :: " + this.noteId);
    },
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



