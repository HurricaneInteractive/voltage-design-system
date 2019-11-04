import BackgroundColours from "../../src/components/BackgroundColours.vue"

export default {
  title: "Background"
}

export const colour = () => ({
  components: { BackgroundColours },
  render(h) {
    return <background-colours />;
  },
})
