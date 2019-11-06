<template>
  <div class="content-container mt-5">
    <h3 class="m-0">Breakpoints</h3>
    <p class="mb-5 mt-1 text-grey-500">Customizing the default breakpoints for your project.</p>
    <ul class="breakpoints-key m-0 p-0 mb-5">
      <li class="mb-3 pb-3 border-0 border-b-1 border-solid border-grey-200">
        <span class="text-grey-500">default: 0px</span>
        <span class="text-blue-500">blue</span>
      </li>
      <li
        v-for="(breakpoint, i) in breakpoints"
        :key="'key-' + breakpoint"
        class="mb-3 pb-3 border-0 border-b-1 border-solid border-grey-200"
      >
        <span class="text-grey-500">{{breakpoint}}: {{breakpointPx[i]}}</span>
        <span :class="'text-' + colours[i] + '-500'">{{colours[i]}}</span>
      </li>
    </ul>
    <div class="breakpoints-min p-5 rounded">
      <p>default: blue</p>
      <p v-for="(breakpoint, i) in breakpoints" :key="breakpoint">
        {{breakpoint}}: {{colours[i]}}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../voltage/scss/package/breakpoints/index.scss";
@import "../../voltage/scss/package/colours/index.scss";

.breakpoints-key {
  list-style: none;
  li {
    display: flex;
    justify-content: space-between;
  }
}

.breakpoints-min {
  p {
    margin: 0;
    display: none;
  }
  @include set-bg-colour("blue");
  @include set-breakpoint("sm") {
    @include set-bg-colour("teal");
  }
  @include set-breakpoint("md") {
    @include set-bg-colour("purple");
  }
  @include set-breakpoint("lg") {
    @include set-bg-colour("orange");
  }
  @include set-breakpoint("xl") {
    @include set-bg-colour("green");
  }
}
</style>

<script>
import breakpointsVariables from "../../voltage/scss/package/breakpoints/_variables.scss"
import scsslist from '../../plugins/scssList'

export default {
  data() {
    return {
      breakpoints: scsslist(breakpointsVariables.breakpoints),
      breakpointPx: scsslist(breakpointsVariables.breakpointPx),
      colours: ["teal", "purple", "orange", "green"]
    }
  }
}
</script>
