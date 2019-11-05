import TextSize from "../../src/components/Typography/TextSize.vue"
import LineHeight from "../../src/components/Typography/LineHeight.vue"
import FontWeight from "../../src/components/Typography/FontWeight.vue"
import FontStyle from "../../src/components/Typography/FontStyle.vue"
import TextAlign from "../../src/components/Typography/TextAlign.vue"
import TextDecoration from "../../src/components/Typography/TextDecoration.vue"
import TextTransform from "../../src/components/Typography/TextTransform.vue"
import FontFamily from "../../src/components/Typography/FontFamily.vue"

export default {
  title: "Typography"
}

export const size = () => ({
  components: { TextSize },
  render(h) {
    return <text-size />;
  },
})

export const lineHeights = () => ({
  components: { LineHeight },
  render(h) {
    return <line-height />
  }
})

export const fontWeights = () => ({
  components: { FontWeight },
  render(h) {
    return <font-weight />
  }
})

export const fontStyle = () => ({
  components: { FontStyle },
  render(h) {
    return <font-style />
  }
})

export const textAlign = () => ({
  components: { TextAlign },
  render(h) {
    return <text-align />
  }
})

export const textDecoration = () => ({
  components: { TextDecoration },
  render(h) {
    return <text-decoration />
  }
})

export const textTransform = () => ({
  components: { TextTransform },
  render(h) {
    return <text-transform />
  }
})

export const fontFamily = () => ({
  components: { FontFamily },
  render(h) {
    return <font-family />
  }
})
