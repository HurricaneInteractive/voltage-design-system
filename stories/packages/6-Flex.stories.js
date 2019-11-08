import FlexGrow from "../../src/components/Flex/FlexGrow.vue"
import FlexShrink from "../../src/components/Flex/FlexShrink.vue"
import FlexDirection from "../../src/components/Flex/FlexDirection.vue"
import FlexWrap from "../../src/components/Flex/FlexWrap.vue"
import AlignItems from "../../src/components/Flex/AlignItems.vue"

export default {
  title: "Packages/Flex"
}

export const direction = () => ({
  components: { FlexDirection },
  render(h) {
    return <flex-direction />;
  },
})

export const wrap = () => ({
  components: { FlexWrap },
  render(h) {
    return <flex-wrap />;
  },
})

export const alignItems = () => ({
  components: { AlignItems },
  render(h) {
    return <align-items />;
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
