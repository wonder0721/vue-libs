<template>
  <div class="export-excel">
    <el-button plain @click="expert2Excel">导出excel</el-button>
    <el-table :data="tableData" border style="width: 50%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        gender: '男'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        gender: '男'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        gender: '男'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        gender: '男'
      }]
    }
  },

  methods: {
    expert2Excel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require('@/vendor/Export2Excel');
        const tHeader = ['日期', '姓名', '住址', '性别'];//生成Excel表格的头部标题栏
        const filterVal = ['date', 'name', 'address', 'gender'];//生成Excel表格的内容栏（根据自己的数据内容属性填写）
        const list = this.tableData;//需要导出Excel的数据
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, '操作日志表');//这里可以定义你的Excel表的默认名称
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  },

}
</script>

<style lang="scss" scoped>
.export-excel {
  text-align: left;
}
</style>