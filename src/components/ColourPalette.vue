<template>
  <div class="swatch">
    <div :class="className" class="sg-swatch"></div>
    <div class="sg-label">.{{className}}</div>
  </div>
</template>

<style scoped lang="scss">
.swatch {
  display: flex;
  align-items: center;
  .sg-swatch {
    height: 50px;
    width: 50px;
    border-radius: 5px;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2);
  }
  .sg-label {
    text-align: center;
    font-family: Arial;
    font-size: 14px;
    padding-left: 10px;
  }
}
</style>

<script>
export default {
  props: {
    className: ""
  }
}
</script>
