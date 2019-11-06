<template>
  <div class="content-container">
    <h3 class="m-0">Flex grow</h3>
    <p class="mb-5 mt-1 text-grey-500">Use <span class="text-blue-500 italic">.{{flexPrefix}}-grow</span> to allow a flex item to grow to fill any available space:</p>
    <div class="flex bg-grey-100">
      <div class="flex-none text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">
        Content that cannot flex
      </div>
      <div class="flex-grow text-grey-800 text-center bg-grey-300 px-4 py-2 m-2">
        Item that will grow
      </div>
      <div class="flex-none text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">
        Content that cannot flex
      </div>
    </div>

    <h3 class="m-0 mt-7">Don't grow</h3>
    <p class="mb-5 mt-1 text-grey-500">Use <span class="text-blue-500 italic">.{{flexPrefix}}-grow-0</span> to prevent a flex item from growing:</p>
    <div class="flex bg-grey-100">
      <div class="flex-grow text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">
        Will grow
      </div>
      <div class="flex-grow-0 text-grey-800 text-center bg-grey-300 px-4 py-2 m-2">
        Will not grow
      </div>
      <div class="flex-grow text-grey-700 text-center bg-grey-200 px-4 py-2 m-2">
        Will grow
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
