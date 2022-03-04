<template>
  <footer class="bg-gray-300 h-20 flex items-center">
    <div class="container mx-auto flex px-5">
      <div class="w-1/3 lg:w-1/4 justify-start flex items-center">
        <img src="~/assets/biancoir.svg" alt="biancoir logo" class="w-8 py-2" />
        <p
          class="px-2 font-bold text-sm md:text-base lg:text-base text-gray-600"
        >
          Biancoir<sup>&trade;</sup>
        </p>
      </div>
      <div class="w-2/3 lg:w-3/4 flex justify-end items-center">
        <small class="pl-5 text-gray-600">
          Made with ❤️ by
          <a
            href="https://github.com/iqbaladinur"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-400"
            >iqbaladinur</a
          >
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView',
}
</script>
