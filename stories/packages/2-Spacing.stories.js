import SpacingScale from "../../src/components/Spacing/SpacingScale.vue"

export default {
  title: "Spacing"
}

export const sizes = () => ({
  components: { SpacingScale },
  render(h) {
    return <spacing-scale />;
  },
})
