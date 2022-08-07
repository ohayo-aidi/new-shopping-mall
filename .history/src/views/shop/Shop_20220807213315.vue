<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe78b;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe604;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" />
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import ShopInfo from "@/components/ShopInfo.vue";
import { get } from "@/utils/request";
//获取当前商铺信息
const useShopInfoEffect = () => {
  const router = useRouter();
  const route = useRoute(); //包含当前路由的一些信息（比如URL里的id）
  const data = reactive({
    item: {},
  });
  const getItemData = async () => {
    // console.log(route.name,route.params)
    //console.log(route.params.id) (为什么刚刚好是id是因为 router里path就是'/shop/:id'而不是 '/shop/:aiid'')点击不同的商家携带的id也不同
    const result = await get(`/api/shop/${route.params.id}`); //根据route的id的不同请求不同的后端接口
    // console.log(result)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
  const { item } = toRefs(data);
  return { item, getItemData };
};

//点击回退的逻辑
const useBackRouterEffect = () => {
    const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
};
export default {
  name: "Shop",
  components: { ShopInfo },
  setup() {
    //1.获取当前商铺信息并立刻执行
    //2.处理回退按钮的逻辑
    const { item, getItemData } = useShopInfoEffect();
    getItemData();
    return { item, getItemData, handleBackClick };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  flex: 1;
  margin: 0.2rem 0 0.16rem 0;
  line-height: 0.32rem;
  &__back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #f5f5f5;
    border-radius: 0.16rem;
    &__icon {
      text-align: center;
      width: 0.44rem;
      color: #b7b7b7;
    }
    &__input {
      width: 100%;
      border: none;
      outline: none;
      background: none;
      padding-top: 0.05rem;
      font-size: 0.14rem;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>
