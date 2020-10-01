<template>
  <div class="difference-block">
    <p class="difference-block__number cab-h1">
      {{sign}}{{amount | separateOrder}}
    </p>
    <p class="difference-block__text landing-body-first">
      <slot name="text" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'DifferenceBlock',
  filters: {
    separateOrder(str) {
      return `${str}`.split('').reverse().map((symbol, index) => {
        if (index % 3 || index === 0) {
          return symbol
        } else {
          return `${symbol} `
        }
      }).reverse().join('')
    }
  },
  props: {
    sign: {
      type: String,
      require: true,
      default: '+'
    },
    amount: {
      type: [String, Number],
      require: true,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.difference-block {
  background-color: rgba($violet-lilac, 0.3);
  border-radius: 6px;
  width: 100%;
  padding: 19px 40px;

  &__number {
    color: $black-main;
    text-align: center;
    margin: 0 0 3px 0;
  }

  &__text {
    margin: 0;
    text-align: center;
    color: $black-text;
  }
}
</style>
