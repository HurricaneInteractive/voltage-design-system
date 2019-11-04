<template>
  <div class="background-colour-palettes">
    <div class="palette-row" v-for="colour in colours" :key="colour">
      <h3>{{ colour }}</h3>
      <div class="colour-row">
        <colour-palette v-for="tint in tints" :key="colour + '-' + tint" :className="'bg-' + colour + '-' + tint" />
      </div>
    </div>
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

export default {
  components: {
    ColourPalette
  },
  data() {
    return {
      colours: ["blue", "green", "orange", "sky-blue", "teal", "purple", "beige", "grey"],
      tints: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  }
}
</script>
