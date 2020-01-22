<template>
     <div>
        <notes></notes>
         <displayNote></displayNote>
     </div>

</template>
<script>

import notes from "../components/notes";
import displayNote from "../components/displayNote";

export default {
name: "noteComponent",
    components: {
    notes,
    displayNote
  },
}
</script>
<style scoped>

</style>