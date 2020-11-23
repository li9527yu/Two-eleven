<template>
  <div class="home">
    <div>
      <el-input placeholder="请输入内容" v-model="inputInfo" clearable>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
      <goods-list :goods="list"></goods-list>
      <h2>home</h2>
  </div>
</template>

<script>
import axios from 'axios'
import GoodsList from '@/components/content/goods/goodsList/goodsList.vue'
export default {
    name: 'Home',
    components:{
      GoodsList
    },
    data(){
      return {
        inputInfo: '',
        list:[
          {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3125812503,3536285887&fm=26&gp=0.jpg",
            'title':"oawhdoiwad",
            'price':"12323",
          },
          {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373701518,995659482&fm=26&gp=0.jpg",
            'title':"dqwdawd",
            'price':"89789"
          },
             {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3125812503,3536285887&fm=26&gp=0.jpg",
            'title':"oawhdoiwad",
            'price':"12323",
          },
          {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373701518,995659482&fm=26&gp=0.jpg",
            'title':"dqwdawd",
            'price':"89789"
          },
             {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3125812503,3536285887&fm=26&gp=0.jpg",
            'title':"oawhdoiwad",
            'price':"12323",
          },
          {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373701518,995659482&fm=26&gp=0.jpg",
            'title':"dqwdawd",
            'price':"89789"
          },
             {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3125812503,3536285887&fm=26&gp=0.jpg",
            'title':"oawhdoiwad",
            'price':"12323",
          },
          {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373701518,995659482&fm=26&gp=0.jpg",
            'title':"dqwdawd",
            'price':"89789"
          },
             {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3125812503,3536285887&fm=26&gp=0.jpg",
            'title':"oawhdoiwad",
            'price':"12323",
          },
          {
            'src':"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1373701518,995659482&fm=26&gp=0.jpg",
            'title':"dqwdawd",
            'price':"89789"
          }
        ]
      }
    },
    created(){

      // this.$axios.get({
      //   url:''
      // }).then(res=>{
      //   console.log(res.data);
      // })
      // console.log(this.list);
    }
}
</script>

<style>

</style>
