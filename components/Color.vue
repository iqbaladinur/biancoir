<template>
  <div>
    <div class="w-full h-full rounded-lg" :style="`background: ${hex}`" />
    <p class="text-left pt-1 uppercase cursor-pointer" @click="copyData()">
      {{ hex }}
      <span
        class="bg-black py-1 normal-case bg-opacity-75 text-white px-2 rounded-lg transition-all"
        :class="visibility"
      >
        copied
      </span>
    </p>
  </div>
</template>

<script>
import copyToClipboard from '@/helper/copy'
export default {
  name: 'Color',
  props: {
    hex: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isShowCopy: false,
    }
  },
  computed: {
    visibility() {
      if (this.isShowCopy) {
        return 'visible'
      }
      return 'invisible'
    },
  },
  methods: {
    copyData() {
      this.isShowCopy = true
      setTimeout(() => {
        this.isShowCopy = false
      }, 1200)
      copyToClipboard(this.hex)
    },
  },
}
</script>
