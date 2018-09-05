<template>
  <div class="about">
    <p>
      I'm a Full Stack Web Developer hailing from Columbus Ohio, USA. I enjoy spending hours in front of a computer writing code, watching cheesy B movies, discovering new craft beer, and listening to all types of podcasts. I've been building websites for about 17 years with almost a decade of professional experience in the Web Development industry.
    </p>
    <p>
      I spend a lot of time learning new techniques to bring my clients the best web apps and websites possible. My one and only goal is to create web-based applications and websites that have the best user experience. User experience can make or break a web application or website. I understand that and that's why building the best user experience is my goal.
    </p>
    <div class="social">
      <a href="https://www.linkedin.com/in/jason-witt-58488445/" class="social__links">
        <font-awesome-icon :icon="['fab', 'twitter']" class="social__icons"/>
      </a>
      <a href="https://twitter.com/JasonAWitt" class="social__links" >
        <font-awesome-icon :icon="['fab', 'linkedin']" class="social__icons" />
      </a>
      <a href="https://github.com/jawittdesigns" class="social__links" >
        <font-awesome-icon :icon="['fab', 'github']" class="social__icons" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang="scss" scoped>
.about {
  flex: 0 1 auto;
  max-width: px-to-em(500);
  line-height: 1.4;
}
.social {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 4rem;
  &__links {
    color: $mineshaft;
    text-decoration: none;
  }
  &__links:hover {
    color: lighten($mineshaft, 20%);
  }
  &__icons {
    display: inline-block;
    flex: 0 1 auto;
    width: px-to-em(30);
    height: px-to-em(30);
  }
}
</style>
