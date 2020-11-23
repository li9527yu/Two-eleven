<template>
  <div class="register">
    <el-row>
        <el-col><h1>Register</h1></el-col>
    </el-row>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="昵称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="checkPass">
            <el-input v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel">
            <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择注册类型">
            <el-option label="店家" value="seller"></el-option>
            <el-option label="用户" value="user"></el-option>
            </el-select>
        </el-form-item>
  
        <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
       var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          pass:'',
          checkPass:'',
          type: '',
          tel:'',
          email:'',
          sex: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           pass: [
            { required: true, message: '请输入密码' },
             { validator: validatePass, trigger: 'blur' } 
          ],
           checkPass: [
            { required: true, message: '请再次输入密码' },
             { validator: validatePass2, trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
          
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            {  type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          type: [
            { required: true, message: '请选择注册类型', trigger: 'change' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              /* 跨域请求 */
            // this.$axios({
            //     method:'post',
            //     url:'',
            //     data:JSON.stringify(this.ruleForm)
            // }).then(res=>{
                  // this.$router.push('/home')
            //     console.log(res);
            // }).catch(err=>{
            //     console.log(err);
            // })
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

<style>
.register{
    width: 500px;
    height: 600px;
    margin: 0 auto;
    border: 1px solid blue;
    padding: 5px;
}
</style>