<template>
  <div class="content-container mt-5">
    <h3 class="m-0">Border Style</h3>
    <p class="mb-5 mt-1 text-grey-500">Use <span class="text-blue-500 italic">.{{borderPrefix}}-{style}</span> to control an element's border style.</p>
    <div class="border-styles">
      <border-box v-for="(style, i) in borderStyle" :key="i" :className="borderPrefix + '-' + style" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .border-styles {
    display: flex;
    margin: 0 -5px;
    /deep/ .border-box {
      margin: 0 5px;
    }
  }
</style>

<script>
import Borders from './Borders.vue';
import BorderBox from './BorderBox.vue';

export default {
  extends: Borders,
  components: {
    BorderBox
  }
}
</script>
