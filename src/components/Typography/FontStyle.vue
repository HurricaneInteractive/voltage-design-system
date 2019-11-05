<template>
  <scale :scale="fontStyle">
    The quick brown fox jumped over the lazy dog.
  </scale>
</template>

<script>
import Scale from "./Scale.vue"
import typography from "../../voltage/scss/package/typography/_variables.scss";

export default {
  components: {
    Scale
  },
  data() {
    return {
      fontStyle: typography.fontStyleKeys
    }
  }
}
</script>
