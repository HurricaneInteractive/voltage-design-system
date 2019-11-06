<script>
import background from "../../voltage/scss/package/background/_variables.scss";
import scsslist from '../../plugins/scssList';

export default {
  data() {
    return {
      attachments: scsslist(background.attachments),
      positions: scsslist(background.positions),
      repeat: scsslist(background.repeat),
      size: scsslist(background.size),
      prefix: background.prefix
    }
  }
}
</script>
