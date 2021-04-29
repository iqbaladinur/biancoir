<template>
  <div
    v-show="!isExtracting && result.length > 0"
    class="h-screen flex justify-center items-center container mx-auto"
  >
    <div>
      <p class="text-left px-5 mt-10 md:mt-0 lg:mt-0 xl:mt-0">
        Show result for: <b>{{ keyword }}</b>
      </p>
      <div class="flex flex-wrap w-full">
        <div
          v-for="(data, key) in result"
          :key="key"
          class="w-full md:w-2/4 lg:w-1/5 xl:w-1/5 h-16 md:h-32 lg:h-32 xl:h-32 py-4 px-5 md:p-5 lg:p-5 xl:p-5"
        >
          <color class="w-full h-full" :hex="data.colorHex" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import clusterColor from '@/modules/ClusterFvck'
import Color from '@/components/Color.vue'
export default {
  name: 'ColorDisplaySection',
  components: {
    Color,
  },
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
  computed: {
    ...mapGetters({
      keyword: 'common/getKeyword',
    }),
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
