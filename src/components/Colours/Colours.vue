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
  },
  methods: {
    getRandomKey: function() {
      const min = Math.ceil(0);
      const max = Math.floor(this.tints.length - 1);
      return this.tints[Math.floor(Math.random() * (max - min + 1)) + min];
    }
  }
}
</script>
