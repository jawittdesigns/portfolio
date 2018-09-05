<template>
  <main :id="setID" :class="setClass" v-bind="setAttr">
    <slot><p>Main</p></slot>
  </main>
</template>

<script>
import About from '@components/About'

export default {
  name: 'mainLayoutMain',
  components: {
    About,
  },
  props: {
    setID: {
      type: String,
      default: 'main',
    },
    setClass: {
      type: String,
      default: 'main',
    },
    setAttr: {
      type: Object,
      default: () => {
        return { role: 'main' }
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

<style lang="scss" scoped>
.main {
  grid-row: 2 / 3;
  max-width: px-to-em(1200);
  padding: 4em 1em 4em;
  margin: 0 auto;
}
</style>
