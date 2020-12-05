<template>
  <div id="app">
    <div class="side-bar">
      <Menu theme="dark" active-name="1">
        <MenuItem name="1" to="/">
          <Icon type="ios-paper" />内容首页
        </MenuItem>
        <MenuItem name="2" to="/about">
          <Icon type="ios-people" />组件管理
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />统计分析
          </template>
          <MenuItem name="3-1" to="/exportExcel">导出excel</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </Submenu>
        <MenuItem name="4" to="/form">
          <Icon type="ios-construct" />搜索表单
        </MenuItem>
      </Menu>
    </div>
    <div class="app-main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.side-bar {
  position: fixed;
  height: 100vh;
  background-color: #515a6e;
}

.app-main {
  margin-left: 240px;
}
</style>
