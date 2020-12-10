<template>
  <div class="common-form">
    <search-form size="small" v-model="keyWord" :model.sync="formModel" :tag-model="optionsModel" label-width="100px" :showExport="true" placeholder="请输入单号" @search="handleSearch">
      <el-form-item label="时间维度">
        <el-radio-group v-model="formModel.radio">
          <el-radio-button v-for="item in optionsModel.radio" :key="item.index" :label="item.value">{{item.label}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formModel.region" placeholder="请选择">
          <el-option v-for="item in optionsModel.region" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-radio-group v-model="formModel.radio1">
          <el-radio-button v-for="item in optionsModel.radio1" :key="item.index" :label="item.value">{{item.label}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker v-model="formModel.dateValue1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
      </el-form-item>
    </search-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-button type="primary" size="small" @click="viewDetail">查看详情</el-button>
    <el-button type="primary" size="small" @click="add">添加</el-button>
    <el-button type="primary" size="small" @click="modify">修改</el-button>
    <plan-dialog :visible.sync="dialogVisible" :isEdit="isEdit"></plan-dialog>
  </div>
</template>

<script>
import SearchForm from '../../components/SearchForm'
import PlanDialog from './components/plan-dialog'
export default {
  name: 'Form',
  components: { SearchForm, PlanDialog },
  data() {
    return {
      keyWord: '',
      formModel: {
        radio: 0,
        region: 0,
        radio1: 0,
        dateValue1: null,
      },
      optionsModel: {
        radio: [
          { value: 0, label: '不限' },
          { value: 1, label: '按月份' },
          { value: 2, label: '按季度' },
          { value: 3, label: '按年份' }
        ],
        region: [
          { value: 0, label: '全部' },
          { value: 1, label: '合肥' },
          { value: 2, label: '南京' },
          { value: 3, label: '杭州' }
        ],
        radio1: [
          { value: 0, label: '不限' },
          { value: 1, label: '二维热' },
          { value: 2, label: '水电费' },
          { value: 3, label: '阿道夫' }
        ],
        dateValue1: () => '时间筛选'
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      dialogVisible: false,
      isEdit: false

    }
  },
  methods: {
    handleSearch(e) {
      console.log(e);
    },
    viewDetail() {
      this.$router.push('/detail')
    },
    add() {
      this.isEdit = false
      this.dialogVisible = true
    },
    modify() {
      this.isEdit = true
      this.dialogVisible = true
    },
  },
}
</script>

<style lang="scss" scoped>
.common-form {
  padding: 20px;
}
</style>