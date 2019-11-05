<template>
  <div class="border-box text-center">
    <span class="text-sm text-grey-400">.{{className}}</span>
    <div class="box border-grey-500 bg-grey-100 border mt-1" :class="classNames"></div>
  </div>
</template>

<style lang="scss" scoped>
.border-box {
  .box {
    width: 96px;
    height: 96px;
    &.rounded-full {
      width: 192px;
    }
  }
}
</style>

<script>
export default {
  props: ["className", "boxClass"],
  computed: {
    classNames() {
      return `${this.className} ${this.boxClass || ""}`
    }
  }
}
</script>
