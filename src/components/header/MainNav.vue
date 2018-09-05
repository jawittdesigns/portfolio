<template>
  <nav id="nav" class="nav" role="navigation">
    <router-link class="nav__item" to="projects">Projects</router-link>
    <router-link class="nav__item" to="contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'mainNav',
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

<style lang="scss" scoped>
@import '~@/sass/base/_media-queries';
@import '~@/sass/mixins/index';

.nav {
  z-index: 1;
  display: flex;
  flex: 0 1 auto;
  align-items: flex-end;
  justify-content: space-between;
  font-family: 'Comfortaa', Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  &__item {
    margin: 0 0.5em;
    color: $mineshaft;
  }
  &__item:hover {
    color: lighten($mineshaft, 20%);
  }

  @include media('>mobile-lg') {
    font-size: 1.5em;
  }
}
</style>
