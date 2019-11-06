import Breakpoints from "../../src/components/Breakpoints/Breakpoints.vue"

export default {
  title: "Packages/Breakpoint"
}

export const test = () => ({
  components: { Breakpoints },
  render(h) {
    return <breakpoints />;
  },
})
