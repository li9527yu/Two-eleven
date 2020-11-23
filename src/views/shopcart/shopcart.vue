<template>
  <div class="shopcart">
    <div id="main">
			<div class="container">
				<div id="cart">
					<form action="#" method="post">
						<table class="form">
							<thead>
								<tr>
									<th width="8%">选择</th>
									<th width="50%">商品</th>
									<th width="13%">单价（元）</th>
									<th width="15%">数量</th>
									<th width="14%">金额（元）</th>
								</tr>
							</thead>
							<tbody id="cart-goods-list">
								<tr v-for="cart in productList" :key="cart.id">
									<td>
										<input type="checkbox" name="good-id" :value="1" v-model="cart.select">
									</td>
                  <!-- 商品信息 -->
									<td class="goods">
										<div class="goods-image">
											<img v-bind:src="cart.pro_img">
										</div>
										<div class="goods-information">
											<h3>{{cart.pro_name}}</h3>
											<ul>
												<li>{{cart.pro_purity}}</li>
												<li>{{cart.pro_service}}</li>
											</ul>
										</div>
									</td>
                  <!-- 单价 -->
									<td>
										<span class="price">￥<em class="price-em">{{cart.pro_price.toFixed(2)}}</em></span>
									</td>
									<td>
                  <!-- 更改数量 -->
										<div class="combo">
											<input type="button" name="minus" value="-" class="combo-minus" @click="cart.pro_num<2?cart.pro_num=1:cart.pro_num--">
											<input type="text" name="count" v-model.number="cart.pro_num" class="combo-value">
											<input type="button" name="plus" value="+" class="combo-plus" v-on:click="cart.pro_num++">
										</div>
									</td>
                     <!-- 总金额 -->
									<td>
                 
										<strong class="amount">￥<em class="amount-em">{{(cart.pro_price*cart.pro_num).toFixed(2)}}</em></strong>
									</td>
								</tr>
							</tbody>
							<tfoot v-show="productList.length!=0">
								<tr>
                  <!-- 全选或删除 -->
									<td colspan="2">
										<label>
                      <input type="checkbox" name="all" v-model="isSelectAll">
                      <span >全选</span>
                    </label>
										<a href="#" id="cart-delete" @click="del()">删除</a>
									</td>
                  <!-- 合计金额确认结算 -->
									<td colspan="3">
										<span>合计：</span>
										<strong id="total-amount">￥<em id="total-amount-em">{{getTotal}}</em></strong>
										<input type="submit" value="立即结算" id="settlement">
									</td>
								</tr>
							</tfoot>
						</table>
					</form>
					<div v-show="productList.length===0">
						购物车还是空的哦~快来购物吧~
					</div>
				</div>
			</div>
		</div>
    <!-- <el-dialog 
    :visible.sync=DialogVisible
    title="提示"
    width="30%"
    center  >
    <span>您还未登录，现在登录吗？</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取消</el-button>
      <el-button @click="navigator">确定</el-button>
    </span>
    </el-dialog> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'ShopCart',
    data (){
      return{
        DialogVisible:false,
        productList:[
						{
						'pro_name': 'Dior 迪奥 花漾甜心小姐 女士淡香水',//产品名称
						'pro_purity': '50ml',//规格
						'pro_service': "不支持7天无理由退货",//售后
						'pro_num': 1,//数量
						'pro_img': 'img/1.jpg',//图片链接
						'pro_price': 498,//单价,
						'select': false ,//选中状态
					},
					{
						'pro_name': '迪奥（dior）口红CD烈艳蓝金唇膏',//产品名称
						'pro_purity': '350g',//规格
						'pro_service': "不支持7天无理由退货",//售后
						'pro_num': 1,//数量
						'pro_img': 'img/2.jpg',//图片链接
						'pro_price': 268,//单价
						'select': false  //选中状态
					},
					{
						'pro_name': 'LANCÔME 兰蔻 嫩肌活肤精华肌底液',//产品名称
						'pro_purity': '50ml',//规格
						'pro_service': "不支持7天无理由退货",//售后
						'pro_num': 1,//数量
						'pro_img': 'img/3.jpg',//图片链接
						'pro_price': 598,//单价
						'select': false  //选中状态
					}
				]
			}
    },
    created(){
      if(!this.$store.state.isLogin){
        this.DialogVisible=true
	  }
	//   请求数据
	//   this.$axios({
	// 	method:'get',
	// 	url:''
	//   }).then(res=>{
	// 	  console.log(res.data);
	//   })
    },
    computed:{
				getTotal:function(){
					var newArr=this.productList.filter(function(val){
						return val.select===true;
					})
					var price=0;
					for(var i=0;i<newArr.length;i++){
						price+=newArr[i].pro_num*newArr[i].pro_price
					}
					return price.toFixed(2)
				},
				isSelectAll:{
					get:function(){
						return this.productList.every(function(val){
							return val.select===true;
						})
					},
					set:function(newValue){
						for(var i=0;i<this.productList.length;i++){
							this.productList[i].select=newValue;
						}
					}
				}
			},
    methods:{
      cancel(){
        this.DialogVisible=false
        this.$router.push('/home')
      },
      navigator(){
        this.$router.push('/login')
      },
      del:function(){
					if(confirm("确定要删除吗")){
						var newArr=[];
						for(var i=0;i<this.productList.length;i++){
							if(this.productList[i].select===false){
								newArr.push(this.productList[i])
							}
						}
						this.productList=newArr;
					}
        }
    }
}
</script>

<style>
#main{
  width: 100%;
}

#cart{
  background: #FFFFFF;
  padding: 0px 0px;
    width: 100%;
}

#cart h1{
    line-height: 40px;
    padding: 0px 0px 10px 0px;
}

table.form{
    border-collapse: collapse;
    empty-cells: show;
    margin: 20px 0px;
    padding: 0px;
    table-layout: fixed;
    width: 100%;
}

table.form th,
table.form td{
    border-bottom: 1px solid #DDDDDD;
    padding: 15px 10px;
    text-align: left;
}

table.form{
    border-top: 3px solid #DDDDDD;
}

.goods .goods-image img{
    border: 1px solid #DDDDDD;
    float: left;
    height: 100px;
    margin: 0px 20px 0px 0px;
}

.goods .goods-information{
    float: left;
}

.goods .goods-information ul{
    color: #666666;
    font-size: 12px;
    line-height: 20px;
    margin:10px 0px 0px 0px;
}

.price,
.amount,
#total-amount{
    color: #E00000;
}

#total-amount{
    font-size: 22px;
}

.price em,
.amount em,
#total-amount em{
    font-style: normal;
}

.combo .combo-minus,
.combo .combo-value,
.combo .combo-plus{
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    color: #333333;
    float: left;
    font-weight: bold;
    margin: 0px;
    outline: none;
    text-align: center;
}

.combo .combo-minus,
.combo .combo-plus{
    font-size: 16px;
    height: 26px;
    line-height: 26px;
    padding: 0px;
    width: 24px;
}

.combo .combo-value{
    border-left: none;
    border-right: none;
    height: 20px;
    line-height: 20px;
    padding: 2px;
    width: 40px;
}

#cart-delete{
    margin-left: 20px;
}

#settlement{
    background: #E00000;
    border: none;
    color: #FFFFFF;
    float: right;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    margin: 0px;
    outline: none;
    padding: 0px;
    width: 160px;
}
</style>