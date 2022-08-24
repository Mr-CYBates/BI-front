<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">数据源管理</el-breadcrumb-item>
    </el-breadcrumb>

</template>

<script>
    export default {
        name: "AppLink"
    }
</script>

<style scoped>
    .el-breadcrumb {
        padding: 16px;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    }
</style>
