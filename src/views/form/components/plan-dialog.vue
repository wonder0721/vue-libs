<template>
  <w-dialog title="回款计划" :async-method="getInfo" v-bind="$attrs" v-on="$listeners">
    <span>hello</span>
    <span slot="footer">
      <el-button plain>取消</el-button>
      <el-button type="primary">确认</el-button>
    </span>
  </w-dialog>
</template>

<script>
import WDialog from '../../../components/WDialog'
export default {
  name: 'PlanDialog',
  components: { WDialog },

  data() {
    return {
    }
  },

  computed: {
  },

  methods: {
    getInfo(resolve, reject) {
      setTimeout(() => {
        resolve()
      }, 2000)
    },

    closeDialog() {
      this.$emit('update:visible', false)
    }
  },

  created() {
  },

  watch: {
  }
}
</script>

<style lang="scss" scoped>
</style>