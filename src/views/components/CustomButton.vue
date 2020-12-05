<template>
  <div class="custom">
    <el-alert show-icon center :title="$attrs.title" :type="$attrs.type" @close="close"></el-alert>
    <el-button circle plain icon="el-icon-check" @click="toSuccess"></el-button>
  </div>
</template>

<script>
export default {
  name: 'CustomButton',
  methods: {
    toSuccess() {
      this.$emit('buttonClick', this.$attrs.type);
    },
    close() {
      this.$emit('alertClose', 'close');
    }
  },
  created() {
    console.log(this.$attrs);
    console.log(this.$listeners);
  }

}
</script>

<style lang="scss" scoped>
.custom {
  width: 200px;
  text-align: center;
}
</style>