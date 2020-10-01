<template>
  <div class="balance-input">
    <div class="container">
      <p class="balance-input__text cab-h3">
        Введите сумму, чтобы увидеть прогноз по подписчикам и просмотрам
      </p>
      <CurrencyInput :currency="currency" :value="balance" @update:value="$emit('update:balance', $event)"/>
    </div>
  </div>
</template>

<script>
import CurrencyInput from '@/components/UI/CurrencyInput'

export default {
  name: 'BalanceInput',
  components: {
    CurrencyInput
  },
  props: {
    currency: {
      type: String,
      require: false,
      default: 'RUB'
    },
    balance: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.balance-input {
  background-color: $grey-minor;
  padding: 24px 0 30px 0;

  &__text {
    width: 282px;
    margin: 0 auto 30px 0;

    @media ($laptop) {
      width: 71%;
      margin-bottom: 40px;
    }
  }

  @media ($laptop) {
    border-radius: 6px;
    padding: 30px 40px;
  }
}
</style>
