<template>
    <div id="data-source">
        <div class="header-search">
            <el-form :inline="true" :model="queryParams" class="demo-form-inline">
                <el-form-item label="名称">
                    <el-input v-model="queryParams.name" placeholder="请输入数据库名称"></el-input>
                </el-form-item>
                <el-form-item label="数据库类型">
                    <el-select v-model="queryParams.type" placeholder="请输入数据库类型">
                        <el-option label="ClickHouse" value="ClickHouse"></el-option>
                        <el-option label="MySql" value="MySql"></el-option>
                        <el-option label="......" value="waiting"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="loadData()">查询</el-button>
                    <el-button type="primary" @click="onReset()">重置</el-button>
                    <el-button type="primary" @click="onCreate">新增</el-button>


                </el-form-item>
            </el-form>
        </div>
        <el-table
                stripe
                border
                :cell-style="{textAlign: 'center'}"
                :header-cell-style="{textAlign: 'center'}"
                :data="tableData"
                style="width: 100%">
            <!--以下的prop都是数据库后端返回来的字段名称-->
            <el-table-column prop="linkName" label="名称"></el-table-column>
            <el-table-column prop="linkType" label="数据库类型"></el-table-column>
            <el-table-column prop="linkUrl" label="地址"></el-table-column>
            <el-table-column prop="dsPort" label="端口"></el-table-column>
            <el-table-column prop="dsName" label="数据库名称"></el-table-column>
            <el-table-column prop="userName" label="用户名"></el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template >
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="table-pagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 20, 30]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalCount">
            </el-pagination>
        </div>
        <add-dialog ref="AddDialog"></add-dialog>
    </div>


</template>

<script>
    import {getAction} from '@/api/manage/'
    import AddDialog from './modules/AddDialog.vue'
    export default {
        name:"DataSourceForm",
        components: {
            AddDialog
        },
        data(){
            return {
                url:{
                    list: '/database/getDatabaseList',
                },
                currentPage: 1,
                pageSize: 0,
                totalCount: 20,
                formInline: {
                    user: '',
                    region: ''
                },
                queryParams: {},
                tableData: []
            }
        },
        created() {
            this.loadData()
        },
        methods: {
            loadData(){

                let params = {
                    ...this.queryParams,
                    ...{offset: 0,limit: 20}
                }
                getAction(this.url.list, params).then(res=>{
                    console.info(res)
                    this.tableData = res.data.result.list
                })
            },
            onCreate() {
                // console.log('新增!');
                this.$refs.AddDialog.openDialog()
            },
            onSubmit() {
                console.log('查询!');
            },
            onReset() {
                this.queryParams = {};
                this.loadData();
            },
            handleSizeChange(val) {
                this.pageSize = val;
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            }
        }
        // data(){
        //     return{
        //         isCollapse:false,
        //     }
        // },
    //     methods:{
    //         toggleLeftDrawer(){
    //             this.isCollapse = !this.isCollapse
    //         }
    //     }
    }
</script>

<style>


</style>
