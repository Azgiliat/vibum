<template>
  <div class="currency-input">
    <svg class="currency-input__icon">
      <use :xlink:href="`#${this.currency}`"/>
    </svg>
    <label class="currency-input__label">
      <input type="phone" v-model="val" class="currency-input__input landing-body-first landing-body-first"/>
    </label>
    <p class="currency-input__currency-text landing-body-second">
      {{ currencyText }}
    </p>
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
    },
    value: {
      type: String,
      require: true
    }
  },
  computed: {
    val: {
      get () {
        return `${this.value}`.split('').reverse().map((symbol, index) => {
          if (index % 3 || index === 0) {
            return symbol
          } else {
            return `${symbol} `
          }
        }).reverse().join('')
      },
      set (newVal) {
        this.$emit('update:value', newVal.replace(/[ ]/g, '').replace(/\D+/g, ''))
        this.$forceUpdate() // for remove all non digits from input
      }
    },
    currencyText () {
      switch (this.currency) {
        case 'RUB':
          return 'руб.'
        case 'EUR':
          return 'евро'
        case 'USD':
          return 'долларов'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.currency-input {
  display: flex;
  align-items: center;

  &__icon {
    width: 26px;
    height: 26px;
    min-width: 26px;
    min-height: 26px;
    fill: $violet-iris;
    margin-right: 16px;

    @media ($laptop) {
      width: 30px;
      height: 30px;
      margin-right: 20px;
    }
  }

  &__label {
    display: block;
    margin-right: 16px;

    @media ($laptop) {
      margin-right: 20px;
    }
  }

  &__input {
    padding: 7px 20px;
    color: $black-main;
    text-align: left;
    border-radius: 6px;
    border: 1px solid $grey-minor;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    -moz-appearance: textfield;
  }

  &__currency-text {
    color: $black-metal;
    margin: 0;
  }
}
</style>
