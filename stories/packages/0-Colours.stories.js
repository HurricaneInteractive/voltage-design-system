import BackgroundColours from "../../src/components/Colours/BackgroundColours.vue"
import TextColours from "../../src/components/Colours/TextColours.vue"
import BorderColours from "../../src/components/Colours/BorderColours.vue"

export default {
  title: "Packages/Colours"
}

export const background = () => ({
  components: { BackgroundColours },
  render(h) {
    return <background-colours />;
  },
})

export const text = () => ({
  components: { TextColours },
  render(h) {
    return <text-colours />;
  },
})

export const border = () => ({
  components: { BorderColours },
  render(h) {
    return <border-colours />;
  },
})
