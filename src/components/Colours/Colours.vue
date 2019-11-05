<script>
import colours from "../../voltage/scss/package/colours/_variables.scss";
import scsslist from "../../plugins/scssList"

export default {
  data() {
    return {
      colours: scsslist(colours.colours),
      tints: scsslist(colours.tints),
      ignore: ['black', 'white', 'transparent']
    }
  }
}
</script>
