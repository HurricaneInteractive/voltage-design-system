<template>
  <div class="content-container">
    <h3 class="m-0">Align Items</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling how flex items are positioned along a container's cross axis.</p>
    <div class="wrap-examples">
      <template v-for="(key, i) in alignItems">
        <div :key="i" class="mb-7">
          <pre class="example-class text-blue-500">.{{itemPrefix + '-' + key}}</pre>
          <div class="flex bg-grey-100" :class="itemPrefix + '-' + key">
            <div class="flex-1 text-grey-700 text-center bg-grey-200 px-4 py-2 m-2 text-lg">1</div>
            <div class="flex-1 text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">2</div>
            <div class="flex-1 text-grey-700 text-center bg-grey-200 px-4 py-2 m-2 text-md">3</div>
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
    height: 100px;
  }
}
</style>

<script>
import BaseFlex from './BaseFlex.vue';

export default {
  extends: BaseFlex
}
</script>
