<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="第一题" prop="value1">
        <el-col :span="4">
          <el-input v-model="ruleForm.value1"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="第二题" prop="value2">
        <el-col :span="4">
          <el-input v-model.number="ruleForm.value2"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="第三题" prop="value3">
        <el-col :span="4">
          <el-input v-model="ruleForm.value3"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="第四题" prop="value4">
        <el-col :span="4">
          <el-input v-model="ruleForm.value4"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="第五题" prop="value5">
        <el-col :span="4">
          <el-input v-model="ruleForm.value5"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="第六题" prop="value6">
        <el-col :span="4">
          <el-input v-model="ruleForm.value6"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="第七题" prop="value7">
        <el-col :span="4">
          <el-input v-model="ruleForm.value7"></el-input>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
    export default {
        data() {
            var validatevalue3=(rule, value, callback) => {
                var patt  =/^[\da-zA-Z_]+$/;
                if (patt.test(value)){
                    callback()
                }else{
                    callback(new Error("请输入数字、字母或下划线"))
                }
            };
            var validatevalue4=(rule, value, callback) => {
                var patt  =/^((?=[\d]+[a-zA-Z_]+[a-zA-Z_\d]*$)|(?=[a-zA-Z]+[\d_]+[a-zA-Z_\d]*$)|(?=[_]+[\da-zA-Z]+[a-zA-Z_\d]*$))[a-zA-Z_\d]+$/;
                if (patt.test(value)){
                    callback()
                }else{
                    callback(new Error("至少包含数字、字母或下划线三种字符中的两种"))
                }
            };
            var validatevalue5=(rule, value, callback) => {
                var patt  =/^((?=[\d]+[a-zA-Z]+[a-zA-Z\d]*$)|(?=[a-zA-Z]+[\d]+[a-zA-Z\d]*$)|(?=[\d]+_+[\d_]*$)|(?=_+[\d]+[\d_]*$)|(?=_+[a-zA-Z]+[a-zA-Z_]*$)|(?=[a-zA-Z]+_+[a-zA-Z_]*$))([a-zA-Z\d_]+$)/;
                if (patt.test(value)){
                    callback()
                }else{
                    callback(new Error("只能包含数字、字母或下划线三种字符中的两种"))
                }
            };
            var validatevalue6=(rule, value, callback) => {
                var patt  =/^[\da-zA-Z_]{6,12}$/;
                if (patt.test(value)){
                    callback()
                }else{
                    callback(new Error("请输入6-12位字母、数字或下划线"))
                }
            };
            var validatevalue7=(rule, value, callback) => {
                var patt  =/^((?=[\d]+[a-zA-Z_]+[a-zA-Z_\d]*$)|(?=[a-zA-Z]+[\d_]+[a-zA-Z_\d]*$)|(?=[_]+[\da-zA-Z]+[a-zA-Z_\d]*$))[a-zA-Z_\d]{8,20}$/;
                if (patt.test(value)){
                    callback()
                }else{
                    callback(new Error("请输入8-20位字符，至少包含数字字母下划线中的两种"))
                }
            };
            return {
                ruleForm: {
                    value1: '',
                    value2:"",
                    value3:"",
                    value4:"",
                    value5:"",
                    value6:"",
                    value7:"",

                },

                rules: {
                    value1: [
                        { min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur' }
                    ],
                    value2:[
                        { type: 'number', message: '只能输入数字', trigger: 'blur' }
                    ],
                    value3:[
                        { validator:validatevalue3,trigger: 'blur' },
                    ],
                    value4:[
                        { validator:validatevalue4,trigger: 'blur' },
                    ],
                    value5:[
                        { validator:validatevalue5,trigger: 'blur' },
                    ],
                    value6:[
                        { validator:validatevalue6,trigger: 'blur' },
                    ],
                    value7:[
                        { validator:validatevalue7,trigger: 'blur' },
                    ],

                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>