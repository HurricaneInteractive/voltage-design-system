<template>
  <div class="scale-wrap">
    <pre class="example-class">.{{ classPrefix(getRandomKey()) }}</pre>
    <div v-for="key in sizes" :key="key">
      <span>{{key}}</span>
      <p :class="classPrefix(key)"><slot></slot></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scale-wrap {
  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 30px;
    width: 100%;
    span {
      // flex: 0 0 50px;
      display: block;
      font-size: 14px;
      color: #666;
    }
    p {
      margin: 0;
      width: 100%;
    }
  }
}
</style>

<script>
import scsslist from "../../plugins/scssList"

export default {
  props: ["scale", "prefix"],
  computed: {
    sizes: function() {
      return scsslist(this.scale)
    }
  },
  methods: {
    classPrefix: function(key) {
      if (this.prefix) {
        return `${this.prefix}-${key.trim()}`
      }

      return key.trim()
    },
    getRandomKey: function() {
      const min = Math.ceil(0);
      const max = Math.floor(this.sizes.length - 1);
      return this.sizes[Math.floor(Math.random() * (max - min + 1)) + min];
    }
  }
}
</script>
