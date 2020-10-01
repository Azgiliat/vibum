<template>
  <section class="main">
    <div class="content">
      <h1 class="main__header landing-h1 landing-h1--32 container">
        Прогноз продвижения
      </h1>
      <p class="main__description landing-body-second landing-body-second--15 container">
        Мы пользуемся только официальными инструментами рекламы, рекомендуемыми самим YouTube, поэтому все приведенные
        нами просмотры, лайки и комментарии будут настоящими, а подписчики живыми и заинтересованными в тематике Вашего
        канала
      </p>
      <BalanceInput class="main__balance-input" :balance.sync="balance"/>
      <div class="main__difference difference container">
        <div class="difference__item">
          <DifferenceBlock class="main__difference-block" :amount="totalViewing">
            <template slot="text">
              просмотров
            </template>
          </DifferenceBlock>
        </div>
        <div class="difference__item">
          <DifferenceBlock class="main__difference-block" :amount="totalFollowersAmount">
            <template slot="text">
              подписчиков
            </template>
          </DifferenceBlock>
        </div>
      </div>
      <div class="main__chart">
        <div class="container">
          <Chart ref="chart" :chartData="chartData" :width="chartWidth" :height="chartHeight" :styles="chartStyles"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DifferenceBlock from '@/components/UI/DifferenceBlock'
import followersAmount from '@/utils/followersAmount'
import Chart from '@/components/Main/Chart'
import BalanceInput from '@/components/Main/BalanceInput'

export default {
  name: 'Main',
  components: {
    BalanceInput,
    Chart,
    DifferenceBlock
  },
  data () {
    return {
      days: 8,
      balance: '5000',
      chartWidth: null,
      chartHeight: null,
    }
  },
  methods: {
    followersAmount
  },
  mounted () {
    switch (this.$mq) {
      case 'mobile':
        this.chartWidth = document.querySelector('.container').clientWidth
        this.chartHeight = 228
        break
      case 'laptop':
        this.chartWidth = document.querySelector('.content').clientWidth
        this.chartHeight = 283
        break
      case 'desktop':
        this.chartWidth = document.querySelector('.content').clientWidth / 2
        this.chartHeight = 283
        break
    }
    this.$refs.chart.render()
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
      return this.daysLabels.map((label, index, arr) => index === 0 || index === (arr.length - 1) ? null : this.followersAmount({
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
          data: this.dataSets
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__header {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
  }

  &__description {
    margin-top: 0;
    margin-bottom: 30px;
  }

  &__chart {

  }

  &__balance-input {
    margin-bottom: 16px;
  }

  &__difference {
    margin-bottom: 16px;
  }

  .difference {
    display: flex;
    justify-content: space-between;

    &__item {
      width: 47.8%;
    }
  }
}
</style>
