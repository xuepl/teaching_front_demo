<template>
    <div style="width: 400px;margin-left: 50px">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-col>
                    <el-input v-model="ruleForm.name"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="身份证" prop="idCard">
                <el-col>
                    <el-input v-model="ruleForm.idCard"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-col>
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-col >
                    <el-input v-model="ruleForm.email"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-col>
                    <el-input v-model.number="ruleForm.age"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="住址" prop="address">
                <el-col >
                    <el-input v-model="ruleForm.address"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import IdCodeValid from "../../utils/idCardCheck";
    import {addMessage} from '../../api/api';
    export default {
        name: "Two",
        data() {
            var validatepname=(rule, value, callback) => {
                var patt  =/^[\u4e00-\u9fa5]{2,20}$/;
                if (patt.test(value)){
                    callback()
                }else{
                    callback(new Error("请输入长度2到20个字符的汉字"))
                }
            };
            var validateidCard=(rule, value, callback) => {
                var res = IdCodeValid(value);
                if (res.result){
                    callback()
                }else{
                    callback(new Error(res.msg))
                }
            };
            var validatephone=(rule, value, callback) => {
                var patt  =/^1[3456789]\d{9}$/;
                if (patt.test(value)){
                    callback()
                }else{
                    callback(new Error("请输入正确的手机号"))
                }
            };
            var validateemail=(rule, value, callback) => {
                var patt  =/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+|$/;
                if (patt.test(value)){
                    callback()
                }else{
                    callback(new Error("请输入正确的邮箱格式"))
                }
            };
            var validateage=(rule, value, callback) => {

                if (value >= 18 && value <= 40){
                    callback()
                }else{
                    callback(new Error("年龄只能在18岁到32岁之间"))
                }
            };
            return {
                ruleForm: {
                    name: '',
                    idCard:"",
                    phone:"",
                    email:"",
                    age:"",
                    address:"",
                },
                rules: {
                    name: [
                        { required: true, message: "请输入姓名", trigger: "blur" },
                        { min: 2, max: 20, message: '姓名长度为2到20个字符', trigger: 'blur' },
                        { validator:validatepname, trigger: 'blur' }
                    ],
                    idCard:[
                        { required: true, message: "请输身份证号", trigger: "blur" },
                        { validator:validateidCard, trigger: 'blur' }
                    ],
                    phone:[
                        { required: true, message: "请输入手机号", trigger: "blur" },
                        { validator:validatephone,trigger: 'blur' },
                    ],
                    email:[
                        { required: true, message: "请输入邮箱号", trigger: "blur" },
                        { validator:validateemail,trigger: 'blur' },
                    ],
                    age:[
                        { required: true, message: "请输入年龄", trigger: "blur" },
                        { type: 'number', message: '只能输入数字', trigger: 'blur' },
                        { validator : validateage, trigger: 'blur' }
                    ],
                    address:[
                        { max: 100, message: '地址最长不得超过100个字符', trigger: 'blur' }
                    ],

                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                       let data = {
                           name: this.ruleForm.name,
                           idcard: this.ruleForm.idCard,
                           phone: this.ruleForm.phone,
                           email: this.ruleForm.email,
                           age: this.ruleForm.age,
                           address: this.ruleForm.address,
                       };
                        addMessage(data).then(data => {
                            if (data.code == '0000'){
                                this.$message({
                                    message: data.message,
                                    type: 'success'
                                });
                            }else{
                                this.$message.error(data.message);
                            }
                        });
                    } else {
                        this.$message.error('数据验证失败');
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>