<template>

  <div class="text-colour-palettes">
    <template v-for="colour in colours">
      <div class="palette-row" :key="colour" v-if="ignore.indexOf(colour) === -1">
        <h3>{{ colour }}</h3>
        <pre class="example-class">.text-{{colour}}-{{ getRandomKey() }}</pre>
        <div class="colour-row">
          <p v-for="tint in tints" :key="colour + '-' + tint" :class="'text-' + colour + '-' + tint" class="text-md">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
      </div>
    </template>
  </div>

</template>

<style lang="scss" scoped>
.text-colour-palettes {
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
