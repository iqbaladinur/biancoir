<template>
  <div class="fixed w-full text-gray-700">
    <div class="flex bg-blue-200 bg-opacity-25">
      <div class="w-1/3 lg:w-1/4 justify-end flex items-center">
        <img src="~/assets/biancoir.svg" alt="biancoir logo" class="w-8 py-2" />
        <p class="px-2 font-bold text-sm md:text-base lg:text-base">
          Biancoir<sup>&trade;</sup>
        </p>
      </div>
      <div
        class="w-2/3 lg:w-3/4 bg-gradient-to-r from-blue-200 to-yellow-300 bg-opacity-50 rounded-l-3xl pr-10 lg:pr-32"
      >
        <nav class="menu">
          <NuxtLink to="/browse" class="mx-5">Browse Palette</NuxtLink>
          <NuxtLink to="/extract" class="mx-5">Extract Color</NuxtLink>
          <NuxtLink to="/about" class="mx-5">About</NuxtLink>
        </nav>
        <div
          v-show="!isShowMobileMenu"
          class="flex md:hidden lg:hidden xl:hidden 2xl:hidden items-center justify-end h-full"
        >
          <button class="focus:outline-none" @click="isShowMobileMenu = true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
        <div class="menu-mobile" :class="mobileMenuVisiBilityClass">
          <div class="bg-gray-100 h-full p-3 rounded-xl">
            <button
              class="float-right w-10 py-2"
              @click="isShowMobileMenu = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle-fill m-auto"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                />
              </svg>
            </button>
            <ul class="mt-10 text-center">
              <li class="m-5">
                <NuxtLink to="/browse">Browse Palette</NuxtLink>
              </li>
              <li class="m-5">
                <NuxtLink to="/browse">Extract Color</NuxtLink>
              </li>
              <li class="m-5">
                <NuxtLink to="/about">About</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isShowMobileMenu: false,
    }
  },
  computed: {
    mobileMenuVisiBilityClass() {
      if (this.isShowMobileMenu) {
        return 'visible'
      }
      return 'invisible'
    },
  },
}
</script>
<style scoped>
.menu {
  @apply justify-end;
  @apply items-center;
  @apply h-full;
  @apply hidden;
}
.menu-mobile {
  @apply block;
  @apply fixed;
  @apply px-5;
  @apply py-20;
  @apply top-0;
  @apply left-0;
  @apply h-screen;
  @apply w-screen;
  @apply z-10;
}
@screen lg {
  .menu {
    @apply flex;
  }
}
@screen md {
  .menu {
    @apply flex;
  }
}
</style>
