<template>
  <detail-container id="bOrderDetail">
    <template #header>
      <div class="head">
        <span class="mr20">合肥市第一中学</span>
        <span class="mr20">张三</span>
        <el-tag>待财务审核</el-tag>
        <span class="fr">
          <el-button size="small">审核通过</el-button>
          <el-button size="small">审核不通过</el-button>
        </span>
      </div>
      <div class="body">BODY</div>
    </template>
    <template #aside="{container}">
      <!-- <anchor show-ink :container="container">
          <anchor-link v-for="item in anchorList" :key="item.id" :href="'#'+item.id" :title="item.title" />
      </anchor>-->
      <wk-anchor :container="container" :anchor-list="anchorList"></wk-anchor>
    </template>
    <template #main>
      <p id="first">first</p>
      <p id="second">second</p>
      <p id="third">third</p>
      <p id="four">four</p>
      <p id="five">five</p>
      <p id="six">six</p>
      <p id="seven">seven</p>
      <p id="eight">eight</p>
    </template>
  </detail-container>
</template>

<script>
import DetailContainer from '@/components/DetailContainer'
import WkAnchor from '@/components/WkAnchor'
export default {
  name: 'Detail',

  components: { DetailContainer, WkAnchor },

  data() {
    return {
      anchorList: [
        { title: '合同订单信息', id: 'first' },
        { title: '合同订单金额', id: 'second' },
        { title: '确认收入信息', id: 'third' },
        { title: '硬件信息', id: 'four' },
        { title: '开票记录', id: 'five' },
        { title: '回款记录&回款计划', id: 'six' },
        { title: '附件&合同照片', id: 'seven' },
        { title: '责任人变更记录', id: 'eight' },
      ]
    }
  },

  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  background-color: #66b1ff;
}
.section {
  margin-top: 200px;
}
.aside {
  width: 100px;
  background-color: #eee;
  padding: 20px;
}
.main {
  height: calc(100vh - 200px);
  & > p {
    height: 200px;
    background-color: #fff;
    margin-bottom: 20px;
  }
}
</style>