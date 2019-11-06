<template>
  <div class="content-container">
    <h3 class="m-0">Background Attachment</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling how a background image behaves when scrolling.</p>

    <div class="background-attachments">
      <bg
        v-for="(att, i) in attachments"
        :key="i"
        :className="prefix + '-' + att"
        image="https://www.fillmurray.com/750/500"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-attachments {
  height: 150vh;
  /deep/ div {
    background-size: cover;
    background-position: center center;
  }
}
</style>

<script>
import Bg from "./Bg.vue"
import Background from "./Background.vue"

export default {
  components: { Bg },
  extends: Background
}
</script>
