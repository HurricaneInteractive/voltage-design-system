<template>
  <div class="content-container">
    <h3 class="m-0">Background Position</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling the position of an element's background image.</p>

    <div class="background-position">
      <bg
        v-for="(pos, i) in positions"
        :key="i"
        :className="prefix + '-' + pos"
        image="https://www.fillmurray.com/75/75"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-position {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px 30px;
  /deep/ .bg-wrapper {
    margin: 0 5px 30px;
    .bg-image {
      width: 150px;
      height: 150px;
      background-repeat: no-repeat;
    }
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
