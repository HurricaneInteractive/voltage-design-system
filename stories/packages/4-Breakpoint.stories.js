import Breakpoints from "../../src/components/Breakpoints/Breakpoints.vue"

export default {
  title: "Breakpoint"
}

export const test = () => ({
  components: { Breakpoints },
  render(h) {
    return <breakpoints />;
  },
})
