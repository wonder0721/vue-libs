<template>
  <span class="operate-btns">
    <el-button size="small" @click="agree">审核通过</el-button>
    <el-button size="small" @click="disagree">审核不通过</el-button>
    <el-button size="small" @click="invalid">作废</el-button>
  </span>
</template>

<script>
export default {
  name: 'OperateBtns',
  props: {
    // 待内勤审核
    // 待财务审核
    // 审核通过
    // 审核不通过
    // 已作废、部分执行
    // 作废待内勤审核
    // 作废待财务审核
    status: {
      type: Number,
      required: true,
      default: () => 0
    },
    guid: {
      type: String,
      required: true,
      default: () => ''
    }
  },

  data() {
    return {
    }
  },

  computed: {
  },

  methods: {
    agree() { },

    disagree() { },

    invalid() { }
  },

  created() {
  },

  watch: {
  }
}
</script>

<style lang="scss" scoped>
</style>