<script>
import createCanvasGradient from '@/utils/canvasGradient'
import { Line, mixins } from 'vue-chartjs'
import { mainBlack, violetIris } from '@/assets/css/vars.scss'

const { reactiveProp } = mixins
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      require: false,
      default: () => ({
        scales: {
          xAxes: [{
            gridLines: {
              zeroLineWidth: 20,
              zeroLineColor: '#000',
              drawOnChartArea: true,
              borderDash: [2],
              lineWidth: 1.5,
              borderDashOffset: 2,
              drawTicks: false
            },
            afterTickToLabelConversion (scaleInstance) {
              scaleInstance.ticks[0] = null // hide zero day
              scaleInstance.ticks[scaleInstance.ticks.length - 1] = null
            },
            ticks: {
              padding: 12,
              fontFamily: 'PT Sans',
              fontColor: mainBlack,
            }
          }],
          yAxes: [{
            gridLines: {
              drawOnChartArea: false,
              drawTicks: false,
              zeroLineWidth: 20,
              zeroLineColor: '#000',
            },
            ticks: {
              padding: 12,
              fontFamily: 'PT Sans',
              fontColor: mainBlack,
            }
          }]
        },
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          labels: {
            filter (legendItem) { //hide label
              return legendItem.datasetIndex !== 0
            }
          }
        }
      })
    }
  },
  data () {
    return {
      canvas: null,
      gradient: null
    }
  },
  mounted () {
    const { datasets } = this.chartData
    const additionalChartData = {
      pointStyle: 'circle',
      pointHoverBackgroundColor: violetIris,
      pointHoverRadius: 5,
      pointBackgroundColor: '#fff',
      borderWidth: 2,
      borderColor: violetIris,
      radius: 5
    }

    this.canvas = document.getElementById('line-chart')
    this.gradient = createCanvasGradient(this.canvas)

    Object.assign(datasets[0], additionalChartData) // add some colors to chart
    datasets[0].backgroundColor = this.gradient


  },
  methods: {
    render() {
      this.renderChart(this.chartData, this.options)
    }
  }
}
</script>

<style scoped>

</style>
