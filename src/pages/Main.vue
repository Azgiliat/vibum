<template>
  <section class="main">
    <div class="content main__content">
      <h1 class="main__header landing-h1 container">
        Прогноз продвижения
      </h1>
      <p class="main__description landing-body-second container">
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
          <FollowersChart :days="days" :balance="balance "/>
        </div>
      </div>
      <div class="main__bottom container">
        <p class="main__bottom-text cab-body-main">
          Прогноз подписчиков зависит от Вашего контента. Сделайте его интересным и старайтесь не снижайть планку
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import DifferenceBlock from '@/components/UI/DifferenceBlock'
import FollowersChart from '@/components/Main/FollowersChart'
import BalanceInput from '@/components/Main/BalanceInput'

export default {
  name: 'Main',
  components: {
    BalanceInput,
    FollowersChart,
    DifferenceBlock
  },
  data () {
    return {
      days: 7,
    }
  },
  computed: {
    ...mapState('followers', {
      totalFollowersAmount: 'followersAmount',
      balance: 'balance'
    }),
    totalViewing () {
      return Math.round(this.totalFollowersAmount * (Math.random() + 10))
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 50px 0;

  @media ($laptop) {
    padding: 80px 0 50px 0;
  }

  @media ($desktop) {
    padding: 100px 0 100px 0;
  }

  &__header {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
    grid-area: header;
    @media ($desktop) {
      margin-bottom: 60px;
    }
  }

  &__description {
    margin-top: 0;
    margin-bottom: 30px;
    grid-area: description;

    @media ($desktop) {
      margin-bottom: 0;
    }
  }

  &__chart {
    grid-area: chart;
    border-top: 1px solid $grey-main1;
    border-bottom: 1px solid $grey-main1;
    padding-top: 50px;
    padding-bottom: 20px;

    @media ($laptop) {
      border-top: none;
      border-bottom: none;
      padding-top: 0;
      padding-bottom: 0;
      margin-top: 30px;
    }
    @media ($desktop) {
      margin-top: 40px;
    }
  }

  &__balance-input {
    margin-bottom: 16px;
    grid-area: balance-input;

    @media ($laptop) {
      margin-bottom: 0;
    }

    @media ($desktop) {
      margin-top: 40px;
    }
  }

  &__difference {
    margin-bottom: 16px;

    @media ($laptop) {
      margin-bottom: 0;
    }
  }

  .difference {
    display: flex;
    justify-content: space-between;
    grid-area: difference;

    @media ($laptop) {
      display: block;
    }

    @media ($desktop) {
      display: flex;
    }

    &__item {
      width: 47.8%;

      @media ($laptop) {
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 22px;
        }
      }
      @media ($desktop) {
        width: 34.2%;
        margin-bottom: 0;
        &:first-child {
          margin-left: auto;
        }
        &:not(&:last-child) {
          margin-right: 24px;
        }
      }

    }
  }

  &__bottom {
    margin-top: 30px;
    grid-area: bottom;
  }

  &__bottom-text {
    margin: 0;
    color: $black-minor;
  }

  &__content {
    @media ($laptop) {
      display: grid;
      grid-template-areas: 'header header' 'description description' 'balance-input difference' 'chart chart' 'bottom .';
      grid-template-columns: 57% 39.5%;
      column-gap: 30px;
    }

    @media ($desktop) {
      grid-template-areas: 'header header' 'description difference' 'balance-input chart' 'bottom chart';
      grid-template-columns: 41% 48.6%;
      column-gap: 10%;
    }
  }
}
</style>
