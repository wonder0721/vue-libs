<template>
  <div>
    <detail-container id="bOrderDetail">
      <template #header>
        <span>合肥市第一中学</span>
        <span>张三</span>
        <el-tag>待财务审核</el-tag>
        <el-button>审核通过</el-button>
        <el-button>审核不通过</el-button>
      </template>
      <template #baseInfo>BASEINFO</template>
      <template #aside="{container}">
        <Anchor show-ink :container="container">
          <AnchorLink href="#first" title="first" />
          <AnchorLink href="#second" title="second" />
          <AnchorLink href="#third" title="third"></AnchorLink>
          <AnchorLink href="#four" title="four"></AnchorLink>
          <AnchorLink href="#five" title="five"></AnchorLink>
          <AnchorLink href="#six" title="six"></AnchorLink>
          <AnchorLink href="#seven" title="seven"></AnchorLink>
          <AnchorLink href="#eight" title="eight"></AnchorLink>
        </Anchor>
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
  </div>
</template>

<script>
import DetailContainer from '@/components/DetailContainer'
export default {
  name: 'Detail',

  components: { DetailContainer },

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
    background-color: #e9eef3;
    margin-bottom: 20px;
  }
}
</style>