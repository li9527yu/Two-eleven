<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :good-item="item" :key="item.id"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from '@/components/content/goods/goodsListItem/goodsListItem'
export default {
    name: 'GoodsList',
    components: {
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    created(){
        console.log(this.goods)
    }
}
</script>

<style>
.goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 3px;
        margin-top: 10px;
    }
</style>