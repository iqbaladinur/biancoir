<template>
  <div class="absolute w-full text-gray-700">
    <div class="flex bg-blue-500 bg-opacity-25">
      <div class="w-1/3 lg:w-1/4 justify-end flex items-center">
        <img src="~/assets/biancoir.svg" alt="biancoir logo" class="w-8 py-2" />
        <p class="px-2 font-bold">Biancoir<sup>&trade;</sup></p>
      </div>
      <div
        class="w-2/3 lg:w-3/4 bg-gradient-to-r from-blue-500 to-green-300 bg-opacity-50 rounded-l-3xl justify-end flex items-center px-10"
      >
        <a href="">About</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
