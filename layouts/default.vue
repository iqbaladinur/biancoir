<template>
  <div class="main-color">
    <Navbar />
    <Nuxt />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
}
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}
.main-color {
  @apply bg-gray-200;
}
</style>
