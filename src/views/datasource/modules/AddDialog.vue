<template>
    <el-dialog title="创建数据源" :visible.sync="dialogFormVisible">
        <el-form ref="dataForm" :model="form" :rules="rules" label-suffix="：" :label-width="formLabelWidth">
            <el-form-item label="数据源名称" prop="name">
                <el-input v-model="form.name" placeholder="请输入数据源名称"></el-input>
            </el-form-item>
            <el-form-item label="数据库类型" prop="type">
                <el-select v-model="form.type" type="textarea" style="width: 600px" placeholder="请选择您要添加的数据库类型" >
                    <el-option label="ClickHouse" value="ClickHouse"></el-option>
                    <el-option label="MySql" value="MySql"></el-option>
                    <el-option label="......" value="waiting"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="IP地址" prop="address">
                <el-input v-model="form.address" placeholder="请输入IP地址"></el-input>
            </el-form-item>
            <el-form-item label="端口" prop="port">
                <el-input v-model="form.port" placeholder="请输入端口号"></el-input>
            </el-form-item>
            <el-form-item label="数据库" prop="database">
                <el-input v-model="form.database" placeholder="请输入数据库名称"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.userName" placeholder="请输入用户名称"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" placeholder="请输入数据库密码"></el-input>
            </el-form-item>
            <el-form-item label="额外参数" prop="additionalParameters">
                <el-input v-model="form.additionalParameters" placeholder="请输入额外参数"></el-input>
                <span class="span-left">(参数会追加到URL后)</span>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="testLink">测试连接</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
            <el-button @click="cancelDialog">取 消</el-button>

        </div>
    </el-dialog>
</template>

<script>
    export default {
        data(){
            return{
                dialogTableVisible: false,
                dialogFormVisible: false,

                form: {},
                formLabelWidth: '120px',
                rules: {
                    name: [
                        { required: true, message: '请输入数据源类型', trigger: 'blur' },
                        { required: true, message: '请输入数据源类型', trigger: 'change' }
                    ],
                    type: [
                        { required: true, message: '请输入数据库类型', trigger: 'blur' },
                        { required: true, message: '请输入数据库类型', trigger: 'change' }
                    ],
                    address: [
                        { required: true, message: '请输入IP地址', trigger: 'blur' },
                        { required: true, message: '请输入IP地址', trigger: 'change' }
                    ],
                    port: [
                        { required: true, message: '请输入端口号', trigger: 'blur' },
                        { required: true, message: '请输入端口号', trigger: 'change' }
                    ],
                    database: [
                        { required: true, message: '请输入数据库名称', trigger: 'blur' },
                        { required: true, message: '请输入数据库名称', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            openDialog(){
                this.dialogFormVisible = true
            },
            cancelDialog(){
                this.dialogFormVisible = false
            },
            testLink(){
              console.log("测试连接！")
            },
            save(){
                console.info(this.form)
                this.$refs.dataForm.validate((valid) => {
                    if (valid) {
                        this.$message.success("添加成功！");
                        this.cancelDialog()
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .span-left{float:left; color:chocolate}
</style>
