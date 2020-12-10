<template>
  <div class="wk-anchor">
    <div class="sidebar"></div>
    <div
      v-for="item in anchorList"
      :key="item.href"
      :title="item.title"
      :class="['wk-anchor-link', currentId === item.id ? 'wk-anchor-link-active' : '']"
      @click="goAnchor(item.id)"
    >
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
import { scrollTop, throttle } from '@/utils'
export default {
  name: 'WkAnchor',

  props: {
    // 滚动区域的容器id 如果不是window则必须为定位元素（relative, absulute, fixed）否则会出bug 
    // 必填 => #container
    container: {
      type: String,
      required: true,
      default: () => ''
    },
    /**
     * 锚点数据 
     * @param{title}: 标题
     * @param{id}: 页面元素对应的id
     */
    anchorList: {
      type: Array,
      required: true,
      default: () => [] // [{title: 'title', id: 'id'}]
    },
    // 一次滚动固定所用的时间
    duration: {
      type: Number,
      default: () => 500
    }
  },

  data() {
    return {
      currentId: '',
      scrollContainer: null,
      scrollElement: null,
      animating: false,
    }
  },

  computed: {
    idArr() {
      return this.anchorList.map(item => item.id)
    },
    titleOffsetArr() {
      return this.idArr.map(id => {
        const el = document.getElementById(id)
        const offsetTop = el.offsetTop
        return { id, offset: offsetTop }
      })
    }
  },

  methods: {
    init() {
      this.currentId = this.anchorList[0].id
      // console.log(document.querySelector('#bOrderDetail'));
      this.$nextTick(() => {
        this.removeListener()
        this.getContainer()
        this.scrollContainer.addEventListener('scroll', throttle(this.handleScroll))
      })
    },

    goAnchor(id) {
      this.currentId = id
      this.handleScrollTo()
    },

    getContainer() {
      this.scrollContainer = this.container ? document.querySelector(this.container) : window
      this.scrollElement = this.container ? this.scrollContainer : (document.documentElement || document.body)
    },

    handleScrollTo() {
      const anchor = document.getElementById(this.currentId)
      if (!anchor) return
      const offsetTop = anchor.offsetTop
      this.animating = true
      scrollTop(this.scrollContainer, this.scrollElement.scrollTop, offsetTop, this.duration, () => {
        this.animating = false
      });
    },

    handleScroll(e) {
      if (this.animating) return
      let titleItem = { id: '', offset: 0 }
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || e.target.scrollTop;
      for (let i = 0; i < this.titleOffsetArr.length; i++) {
        const currentItem = this.titleOffsetArr[i]
        const nextItem = this.titleOffsetArr[i + 1]
        if (scrollTop >= currentItem.offset && scrollTop < ((nextItem && nextItem.offset) || Infinity)) {
          titleItem = currentItem
          this.currentId = titleItem.id
          break
        }
      }
    },

    removeListener() {
      this.scrollContainer && this.scrollContainer.removeEventListener('scroll', this.handleScroll)
    },
  },

  created() {
    this.init()
  },

  beforeDestroy() {
    this.removeListener()
  },

  watch: {
  }
}
</script>

<style lang="scss" scoped>
.wk-anchor {
  position: relative;
  height: 100%;
  padding-right: 10px;
  margin-right: -10px;
  .sidebar {
    position: absolute;
    right: 4px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #dedede;
  }
  .wk-anchor-link {
    position: relative;
    height: 40px;
    font-size: 14px;
    line-height: 30px;
    padding: 5px 10px 5px 0;
    text-align: right;
    color: #222;
    cursor: pointer;
    transition: all 0.2s;
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #dedede;
      right: -10px;
      top: 15px;
      transition: all 0.2s;
    }
    &:hover {
      color: #2d8cf0;
    }
  }
  .wk-anchor-link-active {
    color: #2d8cf0;
    &::after {
      background-color: #2d8cf0;
    }
  }
}
</style>