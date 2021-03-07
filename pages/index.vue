<template>
  <div>
    <div class="container relative">
      <div>
        <Logo />
        <h1 class="title text-3xl md:text-4xl lg:text-5xl">
          Biancoir<sup>&trade;</sup>
        </h1>
        <header class="subtitle text-lg md:text-xl lg:text-2xl">
          Get palette inspiration for your next project.
        </header>
        <generate-palette-keyword
          @extractedColor="(payload) => (imgData = payload)"
          @searchStatus="procesStatus"
        />
        <div class="text-gray-500">
          <div class="h-5 mt-5">
            {{ status }}
          </div>
          <div
            class="bg-red-100 flex justify-center transition-opacity duration-300 ease-in-out"
            :class="isResultReady ? 'opacity-100' : 'opacity-0'"
          >
            <button
              class="animate-bounce focus:outline-none absolute bottom-0 m-auto pb-10"
              @click="scrollToResult()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down-circle-fill w-8 h-8"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="generateResult" class="bg-white rounded-t-3xl">
      <client-only>
        <color-display-section
          :img-data="imgData"
          @generateStatus="processGenerateStatus"
          @showResult="isResultReady = true"
        />
      </client-only>
    </div>
    <footer-view />
  </div>
</template>

<script>
import FooterView from '~/components/Footer.vue'
import GeneratePaletteKeyword from '~/components/GeneratePaletteKeyword.vue'
export default {
  name: 'Home',
  components: {
    GeneratePaletteKeyword,
    FooterView,
    ColorDisplaySection: () =>
      process.client
        ? import('~/components/ColorDisplaySection.vue')
        : Promise.resolve({ render: (h) => h('div') }),
  },
  data() {
    return {
      imgData: null,
      state: '',
      isSearching: false,
      isExtracing: false,
      isResultReady: false,
    }
  },
  computed: {
    status() {
      if (this.isSearching) {
        return 'Searching resource ...'
      }
      if (this.isExtracing) {
        return 'Generating palette ...'
      }
      return ''
    },
  },
  methods: {
    scrollToResult() {
      const resultElm = document.getElementById('generateResult')
      resultElm.scrollIntoView({
        behavior: 'smooth',
      })
    },
    procesStatus(payload) {
      this.isSearching = payload.status
      if (this.isSearching) {
        this.isResultReady = false
      }
    },
    processGenerateStatus(payload) {
      this.isExtracing = payload.status
    },
  },
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
