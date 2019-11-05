<template>
  <div class="spacing-system">
    <h3 class="text-lg mb-5">Spacing</h3>
    <pre class="example-class">{{ exampleClass }}</pre>
    <div class="spacing-details">
      <div class="spacing-rows">
        <div class="spacing-row mb-3" v-for="(key, i) in keys" :key="key">
          <span class="text-sm text-grey-400 mb-1"><span class="font-bold">{{key}}</span> - {{sizes[i]}}</span>
          <div :style="blockStyle(i)" class="bg-teal-100 border-teal-500"></div>
        </div>
      </div>
      <div class="spacing-directions">
        <p class="m-0 mb-3 text-grey-400 text-sm text-right" v-for="dir in dirs" :key="dir">.{{ dir }}-{size}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spacing-system {
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  .spacing-details {
    display: flex;
    margin: 0 -10px;
    > div {
      margin: 0 10px;
    }
    .spacing-rows {
      flex-basis: calc(75% - 20px);
    }
    .spacing-directions {
      flex-basis: calc(25% - 20px);
    }
  }
  .spacing-row {
    > div {
      border-width: 1px;
      border-style: dashed;
    }
  }
}
</style>

<script>
import spacing from "../../voltage/scss/package/spacing/_variables.scss";
import scsslist from '../../plugins/scssList';

export default {
  data() {
    return {
      keys: scsslist(spacing.keys),
      sizes: scsslist(spacing.sizes),
      dirs: scsslist(spacing.dirs)
    }
  },
  methods: {
    blockStyle(idx) {
      return `width: ${this.sizes[idx]}; height: ${this.sizes[idx]}`;
    },
    getRandomKey: function(arr) {
      const min = Math.ceil(0);
      const max = Math.floor(arr.length - 1);
      return arr[Math.floor(Math.random() * (max - min + 1)) + min];
    }
  },
  computed: {
    exampleClass() {
      return `.${this.getRandomKey(this.dirs)}-${this.getRandomKey(this.keys)}`
    }
  }
}
</script>
