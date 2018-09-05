<template>
  <div id="branding" class="branding">
    <h1 class="branding__heading"><router-link class="branding__heading--link" to="/">Jason Witt</router-link></h1>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  // Lifecycle Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
}
</script>

<style lang="scss">
@import '~@sass/fonts/comfortaa';
@import '~@/sass/base/_media-queries';
@import '~@/sass/mixins/index';

.branding {
  z-index: 1;
  flex: 0 1 auto;
  margin-bottom: 2em;
  &__heading {
    position: relative;
    margin: 0;
    font-size: 3em;
  }
  &__heading--link {
    color: $mineshaft;
    text-decoration: none;
  }

  @include media('>tablet-sm') {
    margin: 0;
  }
}
</style>
