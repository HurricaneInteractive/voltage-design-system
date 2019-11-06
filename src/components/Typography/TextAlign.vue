<template>
  <div class="content-container">
    <h3 class="m-0">Text Alignment</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling the alignment of text.</p>

    <scale :scale="textAlign" :prefix="prefix">
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
      textAlign: typography.textAlignKeys,
      prefix: typography.textPrefix
    }
  }
}
</script>
