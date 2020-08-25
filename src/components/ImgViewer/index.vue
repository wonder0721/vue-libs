
<template>
  <transition name="fade">
    <div class="backdrop" v-show="visible" @click="hide" @mousemove="drag">
      <div class="img-wrapper" id="dragLayer" :style="dragLayerObj">
        <img
          v-show="successLoading"
          id="image"
          :src="imgSrc"
          ondragstart="return false"
          @click.stop
          :style="styleObj"
          @load="imgLoaded"
          @error="imgError"
          @mousedown="dragStart"
          @mouseup="dragEnd"
        />
        <img v-show="!successLoading" :src="require('../../assets/loading.gif')" />
      </div>
      <div class="toobar" @click.stop v-show="successLoading">
        <Button shape="circle" title="上一张" @click="previewImg" icon="md-arrow-round-back" />
        <Button shape="circle" title="缩小" @click="shrink" icon="md-remove-circle" />
        <Button shape="circle" title="旋转" @click="rotate" icon="md-refresh" />
        <Button shape="circle" title="放大" @click="enlarge" icon="md-add-circle" />
        <Button shape="circle" title="下一张" @click="nextImg" icon="md-arrow-round-forward" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'imgViewer',

  props: {
    visible: {
      type: Boolean,
      default: () => false
    },
    imgList: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      defaule: () => 0,
    },
    draggable: {
      type: Boolean,
      default: () => false
    },
  },

  data() {
    return {
      successLoading: false,
      imgSrc: undefined,
      cIndex: 0,
      styleObj: null,
      dragLayerObj: null,
      multiples: 1, // 缩放倍数
      deg: 0, // 旋转度数 
      isDrag: false, // 拖动
      initX: 0,
      initY: 0,
      startX: 0,
      startY: 0,
    }
  },

  computed: {
    currentSrc: {
      get() {
        return this.imgList[this.cIndex]
      },
      set(val) {
        this.imgSrc = val;
      }
    }
  },

  watch: {
    imgList() {
      this.currentSrc = this.imgList.length ? this.imgList[this.cIndex] : undefined;
    },
    index: {
      handler(val, old) {
        this.cIndex = val || 0;
      },
      immediate: true,
    }
  },

  methods: {
    // 重置
    reset() {
      this.multiples = 1;
      this.deg = 0;
      this.styleObj = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg);`;
      this.dragLayerObj = `left:0;top:0`;
      this.isDrag = false;
    },
    hide() {
      this.reset();
      this.$emit("update:visible", false)
    },

    nextImg() {
      if (this.cIndex === this.imgList.length - 1) return
      this.reset();
      this.cIndex++;
      this.currentSrc = this.imgList[this.cIndex];
    },
    previewImg() {
      if (this.cIndex === 0) return
      this.reset();
      this.cIndex--;
      this.currentSrc = this.imgList[this.cIndex];
    },

    shrink() {
      if (this.multiples <= 0.3) return
      this.multiples -= 0.2;
      this.styleObj = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg);`;
    },
    enlarge() {
      if (this.multiples >= 3) return
      this.multiples += 0.2;
      this.styleObj = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg);`;
    },
    rotate() {
      this.deg += 90;
      if (this.deg >= 360) this.deg = 0
      this.styleObj = `transform: scale(${this.multiples}) rotateZ(${this.deg}deg);`;
    },

    dragStart(e) {
      this.isDrag = true;
      let imgLayer = document.querySelector("#dragLayer");
      this.initX = imgLayer.offsetLeft;
      this.initY = imgLayer.offsetTop;
      this.startX = e.clientX;
      this.startY = e.clientY;
    },
    drag(e) {
      if (this.draggable && this.isDrag) {
        // 相对页面移动的距离
        let x = e.clientX - this.startX;
        let y = e.clientY - this.startY;
        this.dragLayerObj = `left:${this.initX + x}px;top:${this.initY + y}px`;
      }
    },
    dragEnd() {
      this.isDrag = false;
    },

    imgLoaded() {
      this.successLoading = true;
    },

    imgError() {
      this.imgSrc = require('../../assets/logo.jpg');
    },
  },

  created() {
    console.log('created');
  }
}
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  .img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    img:first-child {
      max-width: 80%;
      max-height: 80%;
    }
    img:last-child {
      position: absolute;
      height: 50px;
    }
  }
  .toobar {
    position: absolute;
    top: calc(90% + 10px);
    left: 50%;
    margin-left: -150px;
    height: 50px;
    border-radius: 25px;
    width: 300px;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>