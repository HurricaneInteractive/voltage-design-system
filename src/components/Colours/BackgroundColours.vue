<template>
  <div class="background-colour-palettes">
    <template v-for="colour in colours">
      <div class="palette-row" :key="colour" v-if="ignore.indexOf(colour) === -1">
        <h3>{{ colour }}</h3>
        <div class="colour-row">
          <colour-palette v-for="tint in tints" :key="colour + '-' + tint" :className="'bg-' + colour + '-' + tint" />
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.background-colour-palettes {
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
}
.palette-row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 30px;
  h3 {
    text-transform: capitalize;
    margin: 0 0 20px;
  }
  .colour-row {
    display: flex;
    flex-flow: wrap row;
    /deep/ .swatch {
      width: calc(100% / 3);
      margin-bottom: 20px;
    }
  }
}
</style>

<script>
import ColourPalette from "./ColourPalette.vue"
import Colours from "./Colours";

export default {
  extends: Colours,
  components: {
    ColourPalette
  }
}
</script>
