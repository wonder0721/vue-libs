<template>
  <div class="detail-wrapper">
    <div class="detail-container">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="section">
        <div class="aside">
          <slot name="aside" :container="'#'+id"></slot>
        </div>
        <div class="main" :id="id">
          <slot name="main"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCContainer',
  props: {
    id: {
      type: String,
      required: true,
      default: () => 'main'
    }
  },
}
</script>

<style lang="scss" scoped>
.detail-wrapper {
  overflow: hidden;
  background-color: #eee;
}
.detail-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  .header {
    height: 200px;
    width: 100%;
    background-color: $primary;
    padding: 10px;
    box-sizing: border-box;
    .top-bar {
      height: 50px;
      display: inline-block;
      width: 100%;
    }
    .base-info {
      height: 130px;
    }
  }
  .section {
    position: relative;
    height: calc(100vh - 200px);
    .aside {
      width: 200px;
      height: 100%;
      position: absolute;
      left: 0;
      padding: 20px;
      background-color: #fff;
    }
    .main {
      margin-left: 200px;
      padding: 20px;
      height: 100%;
      background-color: #eee;
      overflow-y: auto;
    }
  }
}
</style>