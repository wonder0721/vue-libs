<template>
  <el-dialog :close-on-click-modal="false" v-bind="$attrs" v-on="$listeners" @open="dialogOpen">
    <div v-if="status===0" class="loading" v-loading="loading"></div>
    <div v-else-if="status===1" class="error">
      <img src="../../assets/nodata.png" />
      <span>{{ $attrs.errorText || '加载失败，请稍后重试'}}</span>
    </div>
    <slot v-else></slot>
    <template #footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'WDialog',
  inheritAttrs: false,

  props: {
    asyncMethod: {
      type: Function,
      default: () => ''
    }
  },

  data() {
    return {
      status: 0,
      loading: true,
    }
  },

  computed: {
  },

  methods: {
    dialogOpen() {
      this.status = 0
      if (this.asyncMethod && this.$attrs.isEdit) {
        return new Promise((resolve, reject) => {
          this.asyncMethod(resolve, reject)
        }).then(() => {
          this.status = 2
        }).catch(() => {
          this.status = 1
        })
      } else {
        this.status = 2
      }
    }
  },

  created() {
  },

  watch: {
  }
}
</script>

<style lang="scss" scoped>
.loading,
.error {
  height: 30vh;
}
.error {
  text-align: center;
  img {
    height: 100px;
    margin-top: 60px;
  }
  span {
    display: block;
    color: #999;
    margin-top: 10px;
  }
}
</style>