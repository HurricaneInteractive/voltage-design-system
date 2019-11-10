import FlexGrow from "../../src/components/Flex/FlexGrow.vue"
import FlexShrink from "../../src/components/Flex/FlexShrink.vue"
import FlexDirection from "../../src/components/Flex/FlexDirection.vue"
import FlexWrap from "../../src/components/Flex/FlexWrap.vue"
import AlignItems from "../../src/components/Flex/AlignItems.vue"
import AlignContent from "../../src/components/Flex/AlignContent.vue"
import AlignSelf from "../../src/components/Flex/AlignSelf.vue"
import JustifyContent from "../../src/components/Flex/JustifyContent.vue"
import Flexbox from "../../src/components/Flex/Flexbox.vue"
import FlexOrder from "../../src/components/Flex/FlexOrder.vue"

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

export const alignContent = () => ({
  components: { AlignContent },
  render(h) {
    return <align-content />;
  },
})

export const alignSelf = () => ({
  components: { AlignSelf },
  render(h) {
    return <align-self />;
  },
})

export const justifyContent = () => ({
  components: { JustifyContent },
  render(h) {
    return <justify-content />;
  },
})

export const flex = () => ({
  components: { Flexbox },
  render(h) {
    return <flexbox />;
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

export const order = () => ({
  components: { FlexOrder },
  render(h) {
    return <flex-order />;
  },
})
