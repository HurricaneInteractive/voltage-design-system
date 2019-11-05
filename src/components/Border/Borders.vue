<script>
import borders from "../../voltage/scss/package/borders/_variables.scss";
import scsslist from '../../plugins/scssList';

export default {
  data() {
    return {
      borderPrefix: borders.borderPrefix,
      radiusPrefix: borders.radiusPrefix,
      borderStyle: scsslist(borders.borderStyle),
      borderWidth: scsslist(borders.borderWidth),
      borderWidthDir: scsslist(borders.borderWidthDir),
      borderRadius: scsslist(borders.borderRadius),
      borderRadiusDir: scsslist(borders.borderRadiusDir),
    }
  }
}
</script>
