<template>
  <div class="content-container">
    <h3 class="m-0">Flex</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling how flex items both grow and shrink.</p>
    <div class="direction-examples">
      <template v-for="(key, i) in flex">
        <div :key="i" class="mb-7">
          <pre class="example-class text-blue-500">.{{flexPrefix + '-' + key}}</pre>
          <div class="flex bg-grey-100">
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-2" :class="flexPrefix + '-' + key">Short</div>
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-2" :class="flexPrefix + '-' + key">Medium length</div>
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-2" :class="flexPrefix + '-' + key">Significantly larger amount of content</div>
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
</style>

<script>
import BaseFlex from './BaseFlex.vue';

export default {
  extends: BaseFlex
}
</script>
