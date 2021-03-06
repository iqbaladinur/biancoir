<template>
  <div>
    <div class="container">
      <div>
        <Logo />
        <h1 class="title text-3xl md:text-4xl lg:text-5xl">
          Biancoir<sup>&trade;</sup>
        </h1>
        <p class="subtitle text-lg md:text-xl lg:text-2xl">
          Get palette inspiration for your next project.
        </p>
        <generate-palette-keyword />
      </div>
    </div>
  </div>
</template>

<script>
import GeneratePaletteKeyword from '~/components/GeneratePaletteKeyword.vue'
export default {
  name: 'Home',
  components: { GeneratePaletteKeyword },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 400;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
