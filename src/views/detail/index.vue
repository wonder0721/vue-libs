<template>
  <div>
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
        <Anchor show-ink :container="container">
          <AnchorLink v-for="item in anchorList" :key="item.id" :href="'#'+item.id" :title="item.title" />
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

  data() {
    return {
      anchorList: [
        { title: 'first', id: 'first' },
        { title: 'second', id: 'second' },
        { title: 'third', id: 'third' },
        { title: 'four', id: 'four' },
        { title: 'five', id: 'five' },
        { title: 'six', id: 'six' },
        { title: 'seven', id: 'seven' },
        { title: 'eight', id: 'eight' },
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
    background-color: #e9eef3;
    margin-bottom: 20px;
  }
}
</style>