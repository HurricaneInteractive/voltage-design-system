<template>
  <scale :scale="textTransform">
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
      textTransform: typography.textTransformKeys
    }
  }
}
</script>
