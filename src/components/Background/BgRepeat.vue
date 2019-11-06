<template>
  <div class="content-container">
    <h3 class="m-0">Background Repeat</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling the repetition of an element's background image.</p>

    <div class="background-repeat">
      <bg
        v-for="(rep, i) in repeat"
        :key="i"
        :className="prefix + '-' + rep"
        image="https://www.fillmurray.com/150/150"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-repeat {
  /deep/ .bg-image {
    margin-bottom: 30px;
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
