<template>
  <div id="copyright" class="copyright">{{ siteName() }} &copy; {{ currentYear() }}</div>
</template>

<script>
export default {
  name: 'copyright',
  methods: {
    siteName() {
      return 'Jason Witt'
    },
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
