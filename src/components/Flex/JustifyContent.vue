<template>
  <div class="content-container">
    <h3 class="m-0">Justify Content</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling how flex items are positioned along a container's main axis.</p>
    <div class="direction-examples">
      <template v-for="(key, i) in content">
        <div :key="i" class="mb-7">
          <pre class="example-class text-blue-500">.{{justifyPrefix + '-' + key}}</pre>
          <div class="flex bg-grey-100" :class="justifyPrefix + '-' + key">
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">1</div>
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">2</div>
            <div class="text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">3</div>
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
