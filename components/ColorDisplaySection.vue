<template>
  <div
    v-show="!isExtracting && result.length > 0"
    class="h-screen flex justify-center items-center container"
  >
    <div>
      <p class="text-left px-5">Keyword</p>
      <div class="flex flex-wrap w-full">
        <div v-for="(data, key) in result" :key="key" class="w-1/5 h-32 p-5">
          <div class="w-full h-full" :style="`background: ${data.colorHex}`" />
          <p class="text-left">
            {{ data.colorHex }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clusterColor from '@/modules/ClusterFvck'
export default {
  name: 'ColorDisplaySection',
  props: {
    imgData: {
      default: () => null,
      required: false,
      validator: (value) => {
        const type = typeof value
        return type === 'object' || value === null
      },
    },
  },
  data() {
    return {
      isFailedExtract: false,
      isExtracting: false,
      result: [],
    }
  },
  watch: {
    async imgData() {
      if (this.imgData) {
        try {
          this.isExtracting = true
          this.isFailedExtract = false
          this.$emit('generateStatus', {
            status: this.isExtracting,
            errorMsg: '',
            isFailed: this.isFailedExtract,
          })
          const cluster = await clusterColor(this.imgData.data, 10)
          this.result = cluster
          this.isExtracting = false
          this.$emit('generateStatus', {
            status: this.isExtracting,
            errorMsg: '',
            isFailed: this.isFailedExtract,
          })
          this.$emit('showResult')
        } catch (error) {
          this.isFailedExtract = true
          this.isExtracting = false
          this.result = []
          this.$emit('generateStatus', {
            status: this.isExtracting,
            errorMsg: 'Failed generate color',
            isFailed: this.isFailedExtract,
          })
        }
      }
    },
  },
}
</script>
