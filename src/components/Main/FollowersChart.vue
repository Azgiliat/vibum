<template>
  <div class="followers-chart" v-resize="updateParams">
    <Chart ref="chart" :options="options" :chartData="chartData" :width="chartWidth" :height="chartHeight"
           @gradient="gradient = $event"
           :styles="chartStyles"/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Chart from '@/components/UI/Chart'
import followersAmount from '@/utils/followersAmount'
import { mainBlack, violetIris } from '@/assets/css/vars.scss'

export default {
  name: 'FollowersChart',
  components: {
    Chart
  },
  props: {
    days: {
      type: Number,
      require: true
    },
    balance: {
      type: [String, Number],
      require: true
    }
  },
  data () {
    return {
      chartWidth: null,
      chartHeight: null,
      gradient: null,
      options: {
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
      }
    }
  },
  methods: {
    ...mapMutations('followers', {
      setFollowersAmount: 'setFollowersAmount'
    }),
    followersAmount,
    updateParams () {
      this.$refs.chart.makeGradient()
      switch (this.$mq) {
        case 'mobile':
          this.chartWidth = document.querySelector('.container').clientWidth
          this.chartHeight = 228
          this.options.layout.padding = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
          break
        case 'laptop':
          this.chartWidth = document.querySelector('.content').clientWidth
          this.chartHeight = 283
          this.options.layout.padding = {
            top: 37,
            right: 39,
            bottom: 48 ,
            left: 60
          }
          break
        case 'desktop':
          this.chartWidth = document.querySelector('.main__chart').clientWidth
          this.chartHeight = 283
          this.options.layout.padding = {
            top: 37,
            right: 39,
            bottom: 37,
            left: 20
          }
          break
      }
    }
  },
  mounted () {
    this.updateParams()
    this.$refs.chart.render()
    this.setFollowersAmount(this.totalFollowersAmount)
  },
  computed: {
    daysLabels () {
      const result = []
      for (let i = 0; i <= this.days; i++) {
        result.push(`${i} день`)
      }
      return result
    },
    chartStyles () {
      return {
        position: 'relative',
        height: `${this.chartHeight}px`,
        width: `${this.chartWidth}px`
      }
    },
    dataSets () {
      return this.daysLabels.map((label, index) => index === 0 ? null : this.followersAmount({
        day: index,
        balance: this.balance
      })) //first label null for start from day 1, last label null for some free space on the right
    },
    totalFollowersAmount () {
      return this.dataSets[this.dataSets.length - 2]
    },
    totalViewing () {
      return Math.round(this.totalFollowersAmount * (Math.random() + 10))
    },
    chartData () {
      return {
        labels: this.daysLabels,
        datasets: [{
          data: this.dataSets,
          backgroundColor: this.gradient,
          pointStyle: 'circle',
          pointHoverBackgroundColor: violetIris,
          pointHoverRadius: 5,
          pointBackgroundColor: '#fff',
          borderWidth: 2,
          borderColor: violetIris,
          radius: 5
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.followers-chart {
  @media ($laptop) {
    border-radius: 6px;
    border: 1px solid $grey-minor;
  }
}
</style>
