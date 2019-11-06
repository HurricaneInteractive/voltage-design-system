<template>
  <div class="content-container">
    <h3 class="m-0">Flex Shrink</h3>
    <p class="mb-5 mt-1 text-grey-500">Use <span class="text-blue-500 italic">.{{flexPrefix}}-shrink</span> to allow a flex item to shrink if needed:</p>
    <div class="flex bg-grey-100">
      <div class="flex-none text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">
        Longer content that cannot flex
      </div>
      <div class="flex-shrink text-grey-800 text-center bg-grey-300 px-4 py-2 m-2">
        Item that will shrink even if it causes the content to wrap
      </div>
      <div class="flex-none text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">
        Longer content that cannot flex
      </div>
    </div>

    <h3 class="m-0 mt-7">Don't shrink</h3>
    <p class="mb-5 mt-1 text-grey-500">Use <span class="text-blue-500 italic">.{{flexPrefix}}-shrink-0</span> to prevent a flex item from shrinking:</p>
    <div class="flex bg-grey-100">
      <div class="flex-shrink text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">
        Item that can shrink if needed
      </div>
      <div class="flex-shrink-0 text-grey-800 text-center bg-grey-300 px-4 py-2 m-2">
        Item that cannot shrink below its initial size
      </div>
      <div class="flex-shrink text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">
        Item that can shrink if needed
      </div>
    </div>
  </div>
</template>

<script>
import BaseFlex from "./BaseFlex.vue"

export default {
  extends: BaseFlex
}
</script>
