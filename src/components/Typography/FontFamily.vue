<template>
  <div class="content-container">
    <h3 class="m-0">Font Family</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling the font family of an element.</p>

    <scale :scale="fontFamily" :prefix="prefix">
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
      fontFamily: typography.fontFamilyKeys,
      prefix: typography.fontPrefix
    }
  }
}
</script>
