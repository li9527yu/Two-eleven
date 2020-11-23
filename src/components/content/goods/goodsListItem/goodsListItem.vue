<template>
      <div class="goods-item">
          <img :src="goodItem.src" alt="">
          <div class="goods-info">
              <p>{{goodItem.title}}</p>
              <span>${{goodItem.price}}</span>
          </div>
      </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props:{
        goodItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
.goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 25%;
  }
  .goods-item img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: #409EFF;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    
  }
</style>