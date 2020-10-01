import Vue from 'vue'

Vue.directive('resize', {
  inserted(el, binding) {
    console.log('resize done')
    window.addEventListener('resize', binding.value)
  }
})
