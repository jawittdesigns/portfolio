<template>
  <div id="projects" class="projects page">
    <h1>My Projects</h1>
    <Projects />
  </div>
</template>

<script>
import Projects from '@components/Projects.vue'

export default {
  name: 'projects',
  components: {
    Projects,
  },
}
</script>
