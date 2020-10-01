<script>
import createCanvasGradient from '@/utils/canvasGradient'
import { Line, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    gradientWidth: {
      type: Number,
      require: false,
      default: 300
    },
    gradientHeight: {
      type: Number,
      require: false,
      default: 150
    },
    options: {
      type: Object,
      require: false,
      default: () => ({})
    }
  },
  data () {
    return {
      canvas: null,
      gradient: null
    }
  },
  methods: {
    render() {
      const { datasets } = this.chartData
      this.makeGradient()
      datasets[0].backgroundColor = this.gradient
      this.renderChart(this.chartData, this.options) //TODO ONLY UPODATE< gradient on resize NOT RERENDER ALL CHART
    },
    makeGradient() {
      let gradientWidth, gradientHeight

      this.canvas = document.getElementById('line-chart')

        switch (this.$mq) {
          case 'mobile':
            gradientWidth = document.querySelector('.container').clientWidth - this.options.layout.padding.right - this.options.layout.padding.left
            gradientHeight = 228 - this.options.layout.padding.bottom - this.options.layout.padding.top
            break
          case 'laptop':
            gradientWidth = document.querySelector('.content').clientWidth - this.options.layout.padding.right - this.options.layout.padding.left
            gradientHeight = 283 - this.options.layout.padding.bottom - this.options.layout.padding.top
            break
          case 'desktop':
            gradientWidth = document.querySelector('.main__chart').clientWidth - this.options.layout.padding.right - this.options.layout.padding.left
            gradientHeight = 283 - this.options.layout.padding.bottom - this.options.layout.padding.top
            break
        }

      this.gradient = createCanvasGradient(this.canvas, gradientWidth, gradientHeight)
      this.$emit('gradient', this.gradient)
    }
  }
}
</script>

<style scoped>

</style>
