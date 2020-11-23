<template>
    <div class="profile">
        <el-row><el-col>昵称：{{UserInfo.UserName}}</el-col></el-row>
        <el-row><el-col>性别：{{UserInfo.UserSex}}</el-col></el-row>
        <el-row><el-col>手机号：{{UserInfo.UserTel}}</el-col></el-row>
        <el-row><el-col>邮箱：{{UserInfo.UserEmail}}</el-col></el-row>
        <el-row><el-col><router-link  to="/changeInfo">修改信息</router-link></el-col></el-row>
        <div class="hint">
              <el-dialog 
              :visible.sync=DialogVisible
              title="提示"
              width="30%"
              modal='true'
              center  >
              <span>您还未登录，现在登录吗？</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取消</el-button>
                <el-button @click="navigator">确定</el-button>
              </span>
              </el-dialog>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Profile',
    data (){
      return{
        DialogVisible:false,
        UserInfo:{
          UserName:'',
          UserSex:'',
          UserTel:'',
          UserEmail:''
        }
      }
    },
    created(){
      if(!this.$store.state.isLogin){
        this.DialogVisible=true
      }
      // 请求用户数据，保存在UserInfo中
      // this.$axios.get({
      //   url:''
      // }).then(res=>{
      //   console.log(res.data);
      // })
    },
    methods:{
      cancel(){
        this.$router.push('/home')
        this.DialogVisible=false
      },
      navigator(){
        this.$router.push('/login')
      }
    }
    
}
</script>

<style>

</style>
