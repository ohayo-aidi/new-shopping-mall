<template>
  <div class="cart">

    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        />
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

//获取购物车信息逻辑（1.选了多少物品 2.总计）
const useCartEffect = () => {
    const store = useStore()
    const route = useRoute()
    const shopId = route.params.id
    const cartList = store.state.cartList

    const total = computed( () => {
      const productList = cartList[shopId]
      let count = 0
      if(productList){
        for(let i in productList){
          const product = productList[i]
          count+=product.count
        }
      }
      return count
    })

    const price = computed( () => {
      const productList = cartList[shopId]
      let count = 0
      if(productList){
        for(let i in productList){
          const product = productList[i]
          count += (product.count * product.price)
        }
      }
      return count.toFixed(2)//保留俩位小数
    })

  return { total, price }
}
export default {
  name: "Cart",
  setup(){
    const { total, price } = useCartEffect()
    return { total, price }
  }
};
</script>
<style lang="scss" scoped>
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  line-height: 0.49rem;
  &__icon {
    position: relative;
    width: 0.84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      right: .2rem;
      top: .04rem;
      width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: #E93B3B;
      border-radius: 50%;
      font-size: .12rem;
      text-align: center;
      color: #fff;
      transform: scale(.5);
    }
  }
  &__info {
    flex: 1;
    color: #333;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      color: #f80808;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background-color: #4FB0F9;
    text-align: center;
    color: #FFF;
    font-size: .14rem;
  }
}
</style>
