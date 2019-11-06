<template>
  <div class="bg-wrapper">
    <pre class="example-class">.{{ className }}</pre>
    <div :class="className" class="bg-grey-100 bg-image" :style="'background-image: url(' + image + ')'"></div>
  </div>
</template>

<style lang="scss" scoped>
.example-class {
  margin-bottom: 5px;
}
.bg-image {
  width: 100%;
  height: 250px;
}
</style>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "https://www.fillmurray.com/200/200"
    },
    className: {
      required: true
    }
  }
}
</script>
