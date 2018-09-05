<template>
  <form 
    class="contact-form"
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    netlify>

    <div class="hidden">
      <label for="name">Don’t fill this out if you're human</label>
      <input name="bot-field" />
    </div>

    <div class="form__control">
      <label for="name">Your Name</label><br/>
      <input type="text" id="name" class="form__text name" name="name" required>
    </div>

    <div class="form__control">
      <label for="company">Your Email</label><br/>
      <input type="email" id="email" class="form__text email" name="email" required>
    </div>

    <div class="form__control">
      <label for="message">Message</label><br/>
      <textarea id="message" class="form__textarea message" cols="30" rows="10" name="message" required></textarea>
    </div>

    <div class="form__control">
      <input type="submit" id="submit" class="submit" value="Send">
    </div>
  </form>
</template>

<script>
export default {
  name: 'contact-form',
}
</script>

<style lang="scss" scoped>
.hidden {
  visibility: hidden;
}
.contact-form {
  max-width: px-to-em(500);
}
.form__control {
  position: relative;
  padding: 1em 0;
  label {
    padding-bottom: 0.5em;
  }
}
.form__text,
.form__textarea {
  width: 100%;
  padding: 0.5em;
  margin-top: 0.5em;
  background: $athensgray;
  border: 1px solid $midgray;
  border-radius: 3px;
  &:active,
  &:focus {
    color: inherit;
    background: transparent;
  }
}
.submit {
  width: 100%;
  padding: 0.5em;
  color: $white;
  text-align: center;
  background: $bondiblue;
  border: 1px solid $midgray;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    background: darken($bondiblue, 10%);
  }
}
</style>
