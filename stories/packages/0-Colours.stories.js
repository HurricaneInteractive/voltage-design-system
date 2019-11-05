import BackgroundColours from "../../src/components/Colours/BackgroundColours.vue"

export default {
  title: "Colours"
}

export const background = () => ({
  components: { BackgroundColours },
  render(h) {
    return <background-colours />;
  },
})
