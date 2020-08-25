<template>
  <transition name="custom-loading-fade">
    <div v-show="visible" class="custom-loading-mask">
      <div class="custom-loading-spinner">
        <i class="custom-spinner-icon"></i>
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  data: function () {
    return {
      visible: false,
      text: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-loading-mask {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
}
</style>