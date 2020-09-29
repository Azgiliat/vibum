<template>
  <div class="balance-input">
    <div class="container">
      <p class="balance-input__text cab-h3 cab-h3-16">
        Введите сумму, чтобы увидеть прогноз по подписчикам и просмотрам
      </p>
      <CurrencyInput :currency="currency"/>
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
    }
  }
}
</script>

<style scoped>

</style>
