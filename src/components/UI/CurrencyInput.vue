<template>
  <div class="currency-input">
    <svg class="currency-input__icon">
      <use :xlink:href="`#${this.currency}`" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CurrencyInput',
  props: {
    currency: {
      type: String,
      require: false,
      default: 'RUB'
    }
  }
}
</script>

<style lang="scss" scoped>
.currency-input {
  &__icon {
    fill: $violet-iris;
  }
}
</style>
