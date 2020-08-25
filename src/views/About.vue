<template>
  <div class="about">
    <div class="buttons">
      <Button @click="showMessage" type="info">showMessage</Button>
      <Button @click="showImgViewer" type="error">showImgViewer</Button>
      <Button @click="showLogin" type="primary">showLoginModal</Button>
      <Button @click="showLoading" type="warning">showLoading</Button>
    </div>

    <div class="list">
      <List header="Header" footer="Footer" border>
        <ListItem>hookEvent,监听组件生命周期(内部外部)</ListItem>
        <ListItem>Vue.extend开发全局组件，将组件挂载到prototype上</ListItem>
        <ListItem>自定义指令</ListItem>
        <ListItem>深度监听与watch立即触发</ListItem>
        <ListItem>函数式组件及其应用场景</ListItem>
        <ListItem>Vue JSX</ListItem>
        <ListItem>结合第三方组件库动态创建表单</ListItem>
      </List>
    </div>

    <img-viewer :visible.sync="showImg" :imgList="imgList" :draggable="true"></img-viewer>
  </div>
</template>

<script>
import showModal from '../components/loginModal/index'
import ImgViewer from '../components/ImgViewer'

export default {
  components: { ImgViewer },

  data() {
    return {
      loading: undefined,
      showImg: false,
      imgList: [],
    }
  },

  methods: {
    showMessage() {
      this.$message({ duration: 2000, type: 'error', content: 'This is an about page' });
    },
    showImgViewer() {
      this.imgList = [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598331709870&di=911d0864c97119c3b5438793ad8fe3a0&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598333877992&di=a29e2ce73489006a9b60d195e3014f09&imgtype=0&src=http%3A%2F%2Fp2.so.qhimgs1.com%2Ft01dfcbc38578dac4c2.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598333943352&di=20303be6b9ae255d5e19ca062ec14d2a&imgtype=0&src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft01c29a6383f7af0f86.jpg%3Fsize%3D1280x719"
      ],
        this.showImg = true;
    },
    showLogin() {
      showModal()
    },
    showLoading() {
      this.loading = this.$loading()
      setTimeout(() => {
        this.loading.close();
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  text-align: left;
  margin: 0 auto;
  width: 70%;
  .list {
    width: 100%;
  }
  .buttons {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>
