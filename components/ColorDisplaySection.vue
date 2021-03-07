<template>
  <div v-show="!isExtracting && result.length > 0">
    <pre>
      {{ result }}
    </pre>
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
