<template>
  <div class="login">
    <el-row>
        <el-col><h1>Login</h1></el-col>
    </el-row>
    <el-form label-width="100px">
       <el-form-item prop="username" label="用户名">
          <el-input v-model="user.username" placeholder="请输入用户名" prefix-icon></el-input>
        </el-form-item>
        <el-form-item id="password" prop="password" label="密码">
          <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-row>
          <el-col><router-link to="/">找回密码</router-link></el-col>
          <el-col><router-link to="/register">注册账号</router-link></el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" icon="el-icon-upload" @click="doLogin()">登 录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    doLogin() {
      let _this=this;
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.password) {
        this.$message.error("请输入密码！");
        return;
      } 
      else 
      {
        this.$axios.post(
          '',
          {
            user:user.username,
            password:user.password
          })
          .then(data => {
              //登录失败,先不讨论
              if (data.data.status != 200) {
                console.log(data.data.error)
              //登录成功
              } else {
                //设置Vuex登录标志为true，默认userLogin为false
                this.$store.dispatch("userLogin", true);
                //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
                //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                localStorage.setItem("Flag", "isLogin");
                //iViewUi的友好提示
                console.log(data.data.message);
                //登录成功后跳转到指定页面
                this.$router.push("/home");
              }
      });
      }
    }

  }
}
</script>

<style>
.login{
    width: 500px;
    height: 600px;
    margin: 0 auto;
    border: 1px solid blue;
    padding: 5px;
}
</style>