<template>
  <div id="contact" class="contact page">
    <h1>Contact Me</h1>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@components/Contact'

export default {
  name: 'contact',
  components: {
    ContactForm,
  },
}
</script>
