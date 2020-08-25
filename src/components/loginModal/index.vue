<template>
  <transition name="fade">
    <div class="backdrop" v-if="show" @click="show=false">
      <div class="login-modal"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'loginModal',
  data: function () {
    return {
      show: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  .login-modal {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 400px;
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>