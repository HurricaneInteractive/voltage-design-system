<template>

  <div class="border-colour-palettes">
    <template v-for="colour in colours">
      <div class="palette-row" :key="colour" v-if="ignore.indexOf(colour) === -1">
        <h3>{{ colour }}</h3>
        <pre class="example-class">.border-{{colour}}-{{ getRandomKey() }}</pre>
        <div class="colour-row">
          <div v-for="tint in tints" :key="colour + '-' + tint" :class="'border-' + colour + '-' + tint">
            <span class="text-sm uppercase text-grey-300 font-bold">{{ tint }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>

</template>

<style lang="scss" scoped>
.border-colour-palettes {
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
    flex-wrap: wrap;
    margin: 0 -5px;
    > div {
      flex-basis: calc((100% / 3) - 12px);
      height: 50px;
      border-width: 1px;
      border-style: solid;
      margin: 0 5px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
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
