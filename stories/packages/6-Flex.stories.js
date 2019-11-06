import FlexGrow from "../../src/components/Flex/FlexGrow.vue"
import FlexShrink from "../../src/components/Flex/FlexShrink.vue"
import FlexDirection from "../../src/components/Flex/FlexDirection.vue"

export default {
  title: "Packages/Flex"
}

export const direction = () => ({
  components: { FlexDirection },
  render(h) {
    return <flex-direction />;
  },
})

export const grow = () => ({
  components: { FlexGrow },
  render(h) {
    return <flex-grow />;
  },
})

export const shrink = () => ({
  components: { FlexShrink },
  render(h) {
    return <flex-shrink />;
  },
})
