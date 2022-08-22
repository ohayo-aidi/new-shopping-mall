<template>
  <div class="cart">
    <!--整个product层是添加进购物车后才显示的-->
    <div class="product">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartItemsChecked(shopId)"
        >
          <span
            class="product__header__icon iconfont"
            v-html="allChecked ? '&#xe652;' : '&#xe6f7;'"
          ></span
          >全选
        </div>
        <div
          class="product__header__clear"
          @click="() => clearCartProducts(shopId)"
        >
          清空购物车
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <div
            class="product__item__checked iconfont"
            v-html="item.check ? '&#xe652;' : '&#xe6f7;'"
            @click="() => changeCartItemChecked(shopId, item._id)"
          ></div>

          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, -1);
                }
              "
              >-</span
            >
            {{ item.count || 0 }}
            <span
              class="product__number__plus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, 1);
                }
              "
              >+</span
            >
          </div>
        </div>
      </template>
    </div>

    <!--底部的 “总计” “去结算”-->
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{ price }}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useCommonCartEffect } from "./commonCartEffect";

//获取购物车信息逻辑（1.total 2.price 3.productList）
const useCartEffect = () => {
  const store = useStore();
  const route = useRoute();
  const shopId = route.params.id;
  const cartList = store.state.cartList;

  const total = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count;
      }
    }
    return count;
  });

  const price = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        if (product.check) {
          count += product.count * product.price;
        }
      }
    }
    return count.toFixed(2); //保留俩位小数
  });

  const productList = computed(() => {
    const productList = cartList[shopId] || [];
    return productList;
  });

  const allChecked = computed(() => {
    const productList = cartList[shopId]
    let result = true
    if(productList){
      for(let i in productList){
        const product = productList[i]
        if(product.count > 0 && !product.check){
          result = false
        }
      }
    }
    return result
  });

  const changeCartItemChecked = (shopId, productId) => {
    store.commit("changeCartItemChecked", { shopId, productId });
  };

  const clearCartProducts = (shopId) => {
    store.commit("clearCartProducts", { shopId });
  };

  const setCartItemsChecked = (shopId) => {
    store.commit("setCartItemsChecked", { shopId });
  };

  return {
    total,
    price,
    productList,
    changeCartItemChecked,
    clearCartProducts,
    setCartItemsChecked,
    allChecked
  };
};
export default {
  name: "Cart",
  setup() {
    const route = useRoute();
    const shopId = route.params.id; //err: shopId需要在setup暴露出来 上面template层需要通过其获取很多东西
    const {
      total,
      price,
      productList,
      changeCartItemChecked,
      clearCartProducts,
      setCartItemsChecked,
      allChecked
    } = useCartEffect();
    const { changeCartItemInfo } = useCommonCartEffect();
    return {
      total,
      price,
      changeCartItemInfo,
      productList,
      changeCartItemChecked,
      clearCartProducts,
      shopId,
      setCartItemsChecked,
      allChecked
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/mixins.scss";
@import "@/style/variables.scss";
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #fff;
  &__header {
    display: flex;
    line-height: 0.52rem;
    border-bottom: 0.01rem solid #f1f1f1;
    font-size: 0.14rem;
    color: #333;
    &__all {
      width: 0.64rem;
      margin-left: 0.18rem;
    }
    &__icon {
      display: inline-block;
      color: #0091ff;
      font-size: 0.2rem;
      padding-right: 0.12rem;
    }
    &__clear {
      flex: 1;
      margin-right: 0.16rem;
      text-align: right;
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;
    &__checked {
      line-height: 0.5rem;
      font-size: 0.2rem;
      color: #0091ff;
      margin-right: 0.2rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.16rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }
      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: 0.05rem;
      }
    }
  }
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
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
      position: absolute;
      right: 0.2rem;
      top: 0.04rem;
      width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: #e93b3b;
      border-radius: 50%;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
    }
  }
  &__info {
    flex: 1;
    color: #333;
    font-size: 0.12rem;
    &__price {
      line-height: 0.49rem;
      color: #f80808;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: #4fb0f9;
    text-align: center;
    color: #fff;
    font-size: 0.14rem;
  }
}
</style>
