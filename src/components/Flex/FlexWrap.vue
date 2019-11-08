<template>
  <div class="content-container">
    <h3 class="m-0">Flex Wrap</h3>
    <p class="mb-5 mt-1 text-grey-500">Utilities for controlling how flex items wrap.</p>
    <div class="wrap-examples">
      <template v-for="(w, i) in flexWrap">
        <div :key="i" class="mb-7">
          <pre class="example-class text-blue-500">.{{flexPrefix + '-' + w}}</pre>
          <div class="flex bg-grey-100" :class="flexPrefix + '-' + w">
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

.wrap-examples {
  .flex {
    &.flex-no-wrap {
      overflow: hidden;
    }
    > div {
      width: calc((100% / 5) * 1.5);
      flex: none;
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
