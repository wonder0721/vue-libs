<template>
  <div class="search-form">
    <div class="search-header">
      <el-input :value="value" size="small" :placeholder="$attrs.placeholder || '请输入关键字'" @input="e => $emit('input', e)"></el-input>
      <el-button type="primary" size="small" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      <el-button plain size="small" icon="el-icon-refresh-left" @click="reset">重置</el-button>
      <el-button type="text" size="small" icon="el-icon-s-operation" @click="toggleCollapse">展开筛选</el-button>
      <el-button type="primary" size="small" plain icon="el-icon-download" v-if="$attrs.showExport" class="fr" @click="exportExcel">导出</el-button>
    </div>
    <div class="search-tags">
      <span class="yixuan">已选条件：</span>
      <template v-if="tagList.length">
        <el-tag type="warning" :disable-transitions="true" closable v-for="item in tagList" :key="item.key+item.value" @close="tagClose(item)">{{item.label}}</el-tag>
      </template>
      <el-tag v-else type="info">暂无搜索项</el-tag>
    </div>
    <el-collapse-transition>
      <div v-show="show">
        <el-form v-bind="$attrs" :model="model">
          <slot></slot>
        </el-form>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import Tag from './tag.js'
const dc = val => JSON.parse(JSON.stringify(val))
export default {
  name: 'SearchForm',
  props: {
    value: {
      type: String,
      required: true,
      default: () => ''
    },
    model: {
      type: Object,
      required: true,
      default: () => { }
    },
    tagModel: {
      type: Object,
      required: true,
      default: () => { }
    }
  },
  data() {
    return {
      show: false,
      sourceData: {},
      tagList: [],
    }
  },
  methods: {
    genTagList(val) {
      this.tagList = []
      for (const key in val) {
        if (val.hasOwnProperty(key)) {
          const newValue = val[key]; // 更新后的value
          const oldValue = this.sourceData[key]; // 更新前的value
          const tag = new Tag(key, newValue, this.tagModel)
          newValue !== oldValue && this.tagList.push(tag)
        }
      }
    },
    tagClose(tag) {
      const { key } = tag
      let newModel = dc(this.model)
      newModel[key] = this.sourceData[key] // 将对应值复原
      this.$emit('update:model', newModel)
    },
    handleSearch() {
      this.$emit('search', { ...this.model, keyWord: this.value })
    },
    reset() {
      this.$emit('update:model', dc(this.sourceData))
      this.$emit('reset')
    },
    toggleCollapse() {
      this.show = !this.show
    },
    exportExcel() {
      this.$emit('exportExcel')
    }
  },
  watch: {
    model: {
      handler(val, old) {
        this.genTagList(val)
      },
      deep: true,
    }
  },
  created() {
    this.sourceData = dc(this.model)
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  text-align: left;
  .search-header {
    margin-bottom: 20px;
    .el-input {
      width: 300px;
      margin-right: 20px;
    }
  }
  .search-tags {
    margin-bottom: 20px;
    .el-tag {
      margin-right: 20px;
    }
  }
}
.yixuan {
  display: inline-block;
  // padding-right: 12px;
  text-align: right;
}
.fr {
  float: right;
}
</style>