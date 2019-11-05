<template>
  <div class="content-container mt-5">
    <h3 class="m-0">Border Radius</h3>
    <p class="mb-5 mt-1 text-grey-500">Use <span class="text-blue-500 italic">.{{radiusPrefix}}-{radius}</span> to control an element's border radius.</p>
    <div class="border-radius">
      <template v-for="(radii, i) in borderRadius" >
        <border-box className="rounded" v-if="radii == 'rounded'" :key="i" />
        <border-box :key="i" :className="radiusPrefix + '-' + radii" v-if="radii != 'rounded'" />
      </template>
    </div>

    <h3 class="m-0 mt-8">Border Direction Radius</h3>
    <p class="mb-5 mt-1 text-grey-500">Use <span class="text-blue-500 italic">.{{radiusPrefix}}-{direction}-{radius}</span> to control an element's border radius in a given direction.</p>
    <div class="border-radius directions">
      <template v-for="(dir, i) in borderRadiusDir" >
        <border-box :key="i" :className="radiusPrefix + '-' + dir" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .border-radius {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
    /deep/ .border-box {
      margin: 0 5px;
      .box {
        border-style: solid;
        box-sizing: border-box;
      }
    }
    &.directions {
      .border-box {
        margin-bottom: 10px;
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
