import BgAttachment from "../../src/components/Background/BgAttachment.vue"
import BgRepeat from "../../src/components/Background/BgRepeat.vue"
import BgPosition from "../../src/components/Background/BgPosition.vue"
import BgSize from "../../src/components/Background/BgSize.vue"

export default {
  title: "Background"
}

export const attachment = () => ({
  components: { BgAttachment },
  render(h) {
    return <bg-attachment />;
  },
})

export const repeat = () => ({
  components: { BgRepeat },
  render(h) {
    return <bg-repeat />;
  },
})

export const position = () => ({
  components: { BgPosition },
  render(h) {
    return <bg-position />;
  },
})

export const size = () => ({
  components: { BgSize },
  render(h) {
    return <bg-size />;
  },
})
