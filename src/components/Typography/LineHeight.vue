<template>
  <div class="content-container">
    <h3 class="m-0">Line Height</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling the leading (line height) of an element.</p>

    <scale :scale="lineHeights" :prefix="prefix">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.
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
      lineHeights: typography.lineHeightKeys,
      prefix: typography.leadPrefix
    }
  }
}
</script>
