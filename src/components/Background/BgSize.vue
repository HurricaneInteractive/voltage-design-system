<template>
  <div class="content-container">
    <h3 class="m-0">Background Size</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling the background size of an element's background image.</p>

    <div class="background-size">
      <bg
        v-for="(s, i) in size"
        :key="i"
        :className="prefix + '-' + s"
        image="https://www.fillmurray.com/750/500"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-size {
  /deep/ div {
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
