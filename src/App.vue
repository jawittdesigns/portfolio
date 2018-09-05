<template>
  <div id="app" class="app">
    <Layout>
      <!-- header -->
      <Header slot="header">
        <Branding />
        <Nav />
      </Header>
      <!-- /header | main-->
      <Main slot="main">
        <transition 
          name="router-animation"
          enter-active-class="animated fadeInRight delay-1s faster"
          leave-active-class="animated fadeOutLeft faster">
          <router-view :key="$route.fullPath"/>
        </transition>
      </Main>
      <!-- /main | footer -->
      <Footer slot="footer">
        <Copyright />
      </Footer>
      <!-- /footer -->
    </Layout>
  </div>
</template>

<script>
import Layout from '@layouts/MainLayout'
import Header from '@layouts/Header'
import Main from '@layouts/Main'
import Footer from '@layouts/Footer'
import Nav from '@components/header/MainNav'
import Branding from '@components/header/Branding'
import Copyright from '@components/Copyright'

export default {
  name: 'app',
  components: {
    Layout,
    Header,
    Main,
    Footer,
    Nav,
    Branding,
    Copyright,
  },
}
</script>

<style lang="scss">
@import '~@sass/base/index';
@import '../node_modules/animate.css/animate.css';

html,
body {
  height: 100%;
}
.app {
  font-family: 'Comfortaa', Arial, Helvetica, sans-serif;
}
.page {
  position: relative;
  width: 100%;
}
</style>
