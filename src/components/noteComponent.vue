<template>
  <div>
   
    <notes></notes>
    <displayNote displayNote></displayNote>
  </div>
</template>
<script>
import notes from "../components/notes";
import displayNote from "../components/displayNote";
import { HTTP } from "../http-common";

export default {
  name: "noteComponent",
  components: {
    notes,
    displayNote
  },
  props: [
    // camelCase in JavaScript
    "displayNote"
  ],

  data: () => ({
    getAllNotes:[

    ]
  }),
  mounted() {
    this.getAllNotes();
  },

  methods: {
    getAllNotes() {
      HTTP.get(`notes`, { headers: { token: localStorage.getItem("token") } })
        .then(response => {
          // const data = JSON.stringify(response.data);
         this.$log.info("data", response.data);
          alert("get all notes succesfully ", response.data);
        })
        .catch(e => {
          this.$log.info("error", e);
          alert("add description", e);
        });
    }
  }
};
</script>
<style scoped>
</style>