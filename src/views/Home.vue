<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.jpg" /> -->
    <el-button @click="fetchData" type="primary" size="small" :loading="loading">async</el-button>
    <div class="main">
      <div class="bar-wrapper" @scroll="handleScroll()">
        <div id="bar"></div>
      </div>

      <el-table :data="tableData" ref="table" border style="width: 100%" v-loading="tLoading">
        <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="handleDelete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-cascader :options="options" :props="{ checkStrictly: true, expandTrigger: 'hover' }" clearable popper-class="respect"></el-cascader>
      </div>

      <custom-button :title="title" :type="type" @buttonClick="handleClick" @alertClose="handleClose"></custom-button>
    </div>
  </div>
</template>

<script>
import { throttle, timeout } from '@/utils'
import customButton from './components/CustomButton'

export default {
  name: 'Home',

  components: {
    customButton,
  },

  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],

      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],

      loading: false,
      tLoading: false,

      title: '失败',
      type: 'error',
    }
  },

  methods: {
    handleClick(e) {
      console.log(e);
      this.title = '成功';
      this.type = 'success';
    },

    handleClose(e) {
      console.log(e);
    },

    handleScroll: throttle(() => {
      document.querySelector('.main').getElementsByClassName('el-table__body-wrapper')[0].scrollLeft = document.querySelector('.main').getElementsByClassName('bar-wrapper')[0].scrollLeft;
    }, 0),

    async fetchData() {
      this.tLoading = true;
      timeout(2000).then(res => {
        console.log(res);
      }).catch(err => err).finally(f => this.tLoading = false);
    },

    async handleDelete() {
      this.$confirm('是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        this.tLoading = true;
        await timeout(1000)
        this.fetchData();
      }).catch(err => {
        console.log(err);
        this.tLoading = false
      })
    },

  },

  mounted() {
    this.$nextTick(() => {
      const tableWith = document.querySelector('.main').getElementsByClassName('el-table__body-wrapper')[0].scrollWidth;
      // console.log(tableWith);
      document.getElementById('bar').style.width = tableWith + 'px';

      console.log(this.$data);
      console.log(this.$options.data());
    })
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  box-sizing: border-box;
  & > img {
    height: 100px;
  }
}
.main {
  width: 600px;
  .bar-wrapper {
    height: 20px;
    width: 100%;
    overflow-x: scroll;
    #bar {
      height: 100%;
      background-image: linear-gradient(to right, red, yellow, blue);
    }
  }
  .block {
    margin-top: 50px;
  }
}
</style>

<style lang="scss">
.respect {
  .el-cascader-panel {
    .el-radio {
      // width: calc(100% - 20px);
      width: 100%;
      margin-left: -20px;
      height: 100%;
      z-index: 10;
      position: absolute;
      .el-radio__input {
        top: 10px;
        left: 18px;
      }
    }
    .el-cascader-node__label {
      padding: 0 5px 0 25px;
    }
  }
}
</style>
