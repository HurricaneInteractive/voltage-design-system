<template>
  <div class="content-container mt-5">
    <h3 class="m-0">Border Width</h3>
    <p class="mb-5 mt-1 text-grey-500">Use <span class="text-blue-500 italic">.{{borderPrefix}}-{width}</span> to control an element's border width.</p>
    <div class="border-width">
      <template v-for="(width, i) in borderWidth" >
        <border-box className="border" v-if="width == 1" :key="i" />
        <border-box :key="i" :className="borderPrefix + '-' + width" v-if="width != 1" />
      </template>
    </div>

    <h3 class="m-0 mt-8">Border Direction Width</h3>
    <p class="mb-5 mt-1 text-grey-500">Use <span class="text-blue-500 italic">.{{borderPrefix}}-{direction}-{width}</span> to control an element's border width in a given direction.</p>
    <div class="border-width directions">
      <template v-for="(dir, i) in borderWidthDir" >
        <border-box boxClass="border-0" :key="i" :className="borderPrefix + '-' + dir + '-4'" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .border-width {
    display: flex;
    margin: 0 -5px;
    /deep/ .border-box {
      margin: 0 5px;
      .box {
        border-style: solid;
        box-sizing: border-box;
      }
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
