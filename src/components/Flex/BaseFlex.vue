<script>
import _flex from "../../voltage/scss/package/flex/_variables.scss";
import scsslist from '../../plugins/scssList';

export default {
  data() {
    return {
      flexPrefix: _flex.flexPrefix,
      itemPrefix: _flex.itemPrefix,
      contentPrefix: _flex.contentPrefix,
      justifyPrefix: _flex.justifyPrefix,
      orderPrefix: _flex.orderPrefix,
      selfPrefix: _flex.selfPrefix,
      flexDirections: scsslist(_flex.flexDirections),
      flexWrap: scsslist(_flex.flexWrap),
      alignItems: scsslist(_flex.alignItems),
      content: scsslist(_flex.content),
      alignSelf: scsslist(_flex.alignSelf),
      flex: scsslist(_flex.flex),
      flexGrow: scsslist(_flex.flexGrow),
      flexShrink: scsslist(_flex.flexShrink),
      flexOrder: scsslist(_flex.flexOrder),
    }
  }
}
</script>
