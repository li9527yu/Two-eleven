import Vue from 'vue'
import VueRouter from 'vue-router'

const Profile=()=>import('@/views/profile/profile')
const Home=()=>import('@/views/home/home')
const Shopcart=()=>import('@/views/shopcart/shopcart')
const Register=()=>import('@/views/register/register')
const Login=()=>import('@/views/login/login')
const ChangeInfo=()=>import('@/views/changeInfo/changeInfo')
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
    
  },
  {
    path:'/Profile',
    component:Profile,
    
  },
  {
    path:'/shopcart',
    component:Shopcart,
    
  },
  {
    path:'/login',
    component:Login,
   
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/changeInfo',
    component:ChangeInfo,
    meta: {
      isLogin: true // 添加该字段，表示进入这个路由是需要登录的
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {

  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("Flag");

  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag === "isLogin"){

    //设置vuex登录状态为已登录
    store.state.isLogin = true
    next({path:'/home'})

    //如果已登录，还想想进入登录注册界面，则定向回首页
    if (!to.meta.isLogin) {
      console.log('请先退出登录');
      next({
        path: '/home'
      })
    }
  
  //如果登录标志不存在，即未登录
  }
  else{

    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      next({
        path: '/login',
      })

      console.log('请先登录');
    //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }

  }

});

router.afterEach(route => {
  window.scroll(0, 0);
});
export default router
