import BorderStyle from "../../src/components/Border/BorderStyle.vue"
import BorderWidth from "../../src/components/Border/BorderWidth.vue"
import BorderRadius from "../../src/components/Border/BorderRadius.vue"

export default {
  title: "Border"
}

export const style = () => ({
  components: { BorderStyle },
  render(h) {
    return <border-style />;
  },
})

export const width = () => ({
  components: { BorderWidth },
  render(h) {
    return <border-width />;
  },
})

export const radius = () => ({
  components: { BorderRadius },
  render(h) {
    return <border-radius />;
  },
})
