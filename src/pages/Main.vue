<template>
  <section class="main">
    <h1 class="main__header landing-h1 landing-h1-32">
      Прогноз продвижения
    </h1>
    <p class="main__description landing-body-second landing-body-second-15">
      Мы пользуемся только официальными инструментами рекламы, рекомендуемыми самим YouTube, поэтому все приведенные нами просмотры, лайки и комментарии будут настоящими, а подписчики живыми и заинтересованными в тематике Вашего канала
    </p>
    <BalanceInput />
  </section>
</template>

<script>
import BalanceInput from '@/components/Main/BalanceInput'
export default {
  name: 'Main',
  components: {
    BalanceInput
  }
}
</script>

<style lang="scss" scoped>

</style>
