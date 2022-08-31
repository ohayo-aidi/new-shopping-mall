<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': item.tab === currentTab,
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售{{ item.sales }}件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;{{ item.price }}</span>
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>

        <div class="product__item__number">
          <span
            class="product__item__number__minus"
            @click="
              () => {
                changeCartItem(shopId, item._id, item, -1, shopName);
                // changeCartItemInfo(shopId, item._id, item, -1);
              }
            "
            >-</span
          >

          {{ cartList?.[shopId]?.productList?.[item._id]?.count || 0 }}

          <span
            class="product__item__number__plus"
            @click="
              () => {
                changeCartItem(shopId, item._id, item, 1, shopName);
                // changeCartItemInfo(shopId, item._id, item, 1);
              }
            "
            >+</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { get } from "@/utils/request";
import { useCommonCartEffect } from "./commonCartEffect";
import store from "@/store";

const categories = [
  //放在第一位 因为马上就用到了 error: 'categories' is not defined
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];
//Tab的相关逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTabClick = (tab) => {
    currentTab.value = tab;
  };
  return { currentTab, handleTabClick };
};

//商家列表的相关内容(依据currentTab为参数 不同而不同)
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] });

  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/product`, {
      tab: currentTab.value,
    });
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data;
    }
  };

  watchEffect(() => {
    getContentData();
  });

  const { list } = toRefs(content);
  return { list };
};

// 购物车相关逻辑
const useCartEffect = () => {
  const { changeCartItemInfo, cartList } = useCommonCartEffect();
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num);
    changeShopName(shopId, shopName);
  };
  const changeShopName = (shopId, shopName) => {
    store.commit("changeShopName", { shopId, shopName });
  };
  return {
    cartList,
    changeCartItem,
  };
};
export default {
  name: "Content",
  setup() {
    const route = useRoute();
    const shopId = route.params.id; //shopId提取到setup函数里 是因为多个函数都需要使用
    const { currentTab, handleTabClick } = useTabEffect();
    const { list } = useCurrentListEffect(currentTab, shopId);
    const {cartList, change}
    return {
      categories,
      currentTab,
      handleTabClick,
      list,
      changeCartItem,
      shopId,
      cartList,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/mixins.scss";
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
  //   background-color: aquamarine;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: 0.76rem;
  background: #f5f5f5;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 14px;
    color: #333;
    &--active {
      background: #fff;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    margin: 0.12rem 0.16rem;
    border-bottom: 0.01rem, solid #f1f1f1;
    &__detail {
      @include ellipsis; //父级超出省略 防止子集省略 父级却超出
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      @include ellipsis; //子集本身超出则省略
    }
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: #333;
    }
    &__price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #e93b3b;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
    &__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        font-size: 0.2rem;
        line-height: 0.16rem;
        border-radius: 50%; //变成圆形
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid #666;
        color: #666;
        margin-right: 0.05rem;
      }
      &__plus {
        background: #0091ff;
        color: #fff;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
