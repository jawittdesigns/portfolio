<template>
  <section class="projects">
    <div class="project" v-for="(project, index) in projects" :key="index">
      <div class="project__image">
        <img :src="getImage(project.image)" :alt="project.name + ' website screenshot'">
      </div>
      <div class="project__content">
        <div class="project__description">
          <h2 class="description__heading">{{project.name}}</h2>
          <p>
            <a :href="project.link" class="project__link">{{project.link}}</a>
          </p>
          <p>
            {{project.copy}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from './projects.js'

export default {
  name: 'project-card',
  data() {
    return {
      imageUrl: '../assets/images',
      projects,
    }
  },
  methods: {
    getImage(name) {
      return require('@assets/images/' + name + '-600x600.jpeg')
    },
  },
}
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
}
.project {
  position: relative;
  width: px-to-em(550);
  height: px-to-em(350);
  padding: 2em 2em 1em 1em;
  margin: 1em;
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: px-to-em(250);
    height: px-to-em(250);
    background: #ccc;
    border: 1px solid $midgray;
    box-shadow: $image-box-shadow;
  }
  &__link {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: $white;
  }
  &__content {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: px-to-em(534);
    height: px-to-em(334);
    background: $bondiblue;
    border: 1px solid $midgray;
  }
  &__description {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: px-to-em(281);
    height: px-to-em(316);
    padding: 0 1em 1em 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: $white;
  }
  .description__heading {
    font-family: 'Comfortaa', Arial, Helvetica, sans-serif;
  }
}
</style>
