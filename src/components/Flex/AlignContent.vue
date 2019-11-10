<template>
  <div class="content-container">
    <h3 class="m-0">Align Content</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling how lines are positioned in multi-line flex containers.</p>
    <div class="wrap-examples">
      <template v-for="(key, i) in content">
        <div :key="i" class="mb-7">
          <pre class="example-class text-blue-500">.{{contentPrefix + '-' + key}}</pre>
          <div class="flex flex-wrap bg-grey-100" :class="contentPrefix + '-' + key">
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-1">1</div>
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-1">2</div>
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-1">3</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.example-class {
  margin-bottom: 8px;
}

.wrap-examples {
  .flex {
    height: 175px;
    > div {
      width: calc(100% / 3);
    }
  }
}
</style>

<script>
import BaseFlex from './BaseFlex.vue';

export default {
  extends: BaseFlex
}
</script>
