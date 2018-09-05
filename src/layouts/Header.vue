<template>
  <header :id="attr.id" :class="attr.class" v-bind="attr.attrs">
    <slot><p>Header</p></slot>
  </header>
</template>

<script>
export default {
  name: 'mainLayoutHeader',
  components: {},
  props: {
    attr: {
      type: Object,
      default: () => {
        return {
          id: 'header',
          class: 'header',
          attrs: { role: 'banner' },
        }
      },
    },
  },
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
@import '~@/sass/base/_media-queries';
@import '~@/sass/mixins/index';

.header {
  position: relative;
  display: flex;
  flex-direction: column;
  grid-row: 1;
  align-items: center;
  justify-content: center;
  height: px-to-em(200);
  padding: 1rem;
  background: $goldenrod;
  border-bottom: 2px solid darken($goldenrod, 20%);
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background: url('~@assets/hero-image.jpg') center center;
    opacity: 0.1;
  }

  @include media('>tablet-sm') {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 1rem;
  }
}
</style>
