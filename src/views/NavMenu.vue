<template>
  <div>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <!--      <el-image :src="require('@/assets/planet.png')"></el-image>-->
      <el-menu-item index="1">仪表盘</el-menu-item>
      <el-submenu index="2">
        <template slot="title">可视化查询</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title"></template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" >数据集</el-menu-item>
      <el-menu-item index="4" @click="goDataSource()">数据源</el-menu-item>
      <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">项目中心</a></el-menu-item>
      <el-menu-item index="6" >用户分群</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '0',
      activeIndex2: '0',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
      goDataSource(){
        this.$router.push('/datasourceform')
        this.$router.go(0)
      }
  }
}
</script>

<style>

</style>
