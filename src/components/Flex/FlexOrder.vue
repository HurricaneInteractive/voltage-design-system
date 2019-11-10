<template>
  <div class="content-container">
    <h3 class="m-0">Order</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling the order of flex items.</p>
    <div class="direction-examples">
      <template v-for="(key, i) in flexOrder">
        <div :key="i" class="mb-7">
          <pre class="example-class">.{{orderPrefix + '-' + key}}</pre>
          <div class="flex bg-grey-100">
            <div class="text-grey-700 text-center bg-grey-300 px-4 py-2 m-2" :class="orderPrefix + '-' + key">1</div>
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">2</div>
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">3</div>
          </div>
        </div>
      </template>
      <div class="mb-7">
        <h4>Order numbered utilities</h4>
        <pre class="example-class">.{{orderPrefix}}-&lt;1-{{flexOrderRepeats}}&gt;</pre>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.example-class {
  margin-bottom: 8px;
}
</style>

<script>
import BaseFlex from './BaseFlex.vue';

export default {
  extends: BaseFlex
}
</script>
