<template>
  <div id="home" class="home page">
    <About />
  </div>
</template>

<script>
import About from '@components/About'

export default {
  name: 'home',
  components: {
    About,
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
