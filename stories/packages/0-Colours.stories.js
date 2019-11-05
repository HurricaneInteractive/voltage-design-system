import BackgroundColours from "../../src/components/Colours/BackgroundColours.vue"
import TextColours from "../../src/components/Colours/TextColours.vue"

export default {
  title: "Colours"
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
