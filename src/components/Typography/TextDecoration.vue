<template>
  <div class="content-container">
    <h3 class="m-0">Text Decoration</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling the decoration of text.</p>

    <scale :scale="textDecoration">
      The quick brown fox jumped over the lazy dog.
    </scale>
  </div>
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
      textDecoration: typography.textDecorationKeys
    }
  }
}
</script>
