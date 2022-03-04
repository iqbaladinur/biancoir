<template>
  <div>
    <form
      class="flex items-center justify-center px-5"
      @submit.prevent="searchImage()"
    >
      <div
        class="flex w-full md:w-2/3 lg:w-2/3 xl:w-2/4 shadow rounded-full transition-all duration-300 ease-in-out"
        :class="{ 'search-field shadow-md': isFocused }"
      >
        <input
          ref="searchForm"
          v-model="keyword"
          type="text"
          placeholder="Type a word to generate color..."
          class="w-full rounded-l-full h-10 pl-5 focus:outline-none text-center text-gray-600"
          @focus="isFocused = true"
          @blur="isFocused = false"
        />
        <div
          class="flex w-10 h-10 items-center rounded-r-full bg-white icon-box text-gray-600"
        >
          <svg
            v-if="!isSearching"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search w-10"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
          <svg
            v-else
            width="16"
            height="16"
            class="animate-spin w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { getImgData } from '@/helper/img'

export default {
  name: 'Generator',
  data() {
    return {
      isFocused: false,
      isSearching: false,
      keyword: '',
      isFailedSearching: false,
      failedReason: '',
      isFailedGetImgData: false,
    }
  },
  methods: {
    searchImage() {
      const baseUrl = 'https://source.unsplash.com/200x150?'
      this.isSearching = true
      this.isFailedSearching = false
      this.isFailedGetImgData = false
      this.failedReason = ''
      this.$emit('searchStatus', {
        status: this.isSearching,
        errorMsg: this.failedReason,
        isFailed: this.isFailedSearching,
      })
      this.$refs.searchForm.blur()
      this.$store.commit('common/setKeyword', this.keyword)
      fetch(`${baseUrl}${this.keyword}`)
        .then((result) => result.blob())
        .then((image) => {
          getImgData(image)
            .then((imgData) => {
              this.$emit('extractedColor', imgData)
            })
            .catch((e) => {
              this.isFailedGetImgData = true
              this.failedReason = e.message
            })
            .finally(() => {
              this.$emit('searchStatus', {
                status: this.isSearching,
                errorMsg: this.failedReason,
                isFailed: this.isFailedSearching,
              })
            })
        })
        .catch((e) => {
          this.isFailedSearching = true
          this.failedReason = e.message
        })
        .finally(() => {
          this.isSearching = false
          if (!this.isFailedSearching) {
            this.keyword = ''
          }
          this.$emit('searchStatus', {
            status: this.isSearching,
            errorMsg: this.failedReason,
            isFailed: this.isFailedSearching,
          })
        })
    },
  },
}
</script>
<style scoped>
.search-field {
  width: 100%;
}
</style>
