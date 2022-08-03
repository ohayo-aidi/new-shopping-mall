<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont">&#xe78b;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe604;</span>
        <input class="search__content__input"/>
      </div>
    </div>
    <ShopInfo :item="item" />
  </div>
</template>
<script>
import ShopInfo from "@/components/ShopInfo.vue";
export default {
  name: "Shop",
  components: { ShopInfo },
  setup() {
    const item = {
      _id: "1",
      name: "沃尔玛",
      imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: "VIP尊享满89元减4元运费券",
    };
    return { item };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 0 .18rem;
}
.search{
  display: flex;
  flex: 1;
  margin: .2rem 0 .16rem 0;
  line-height: .32rem;
  &__back{
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content{
    display: flex;
    flex: 1;
    background: #F5F5F5;
    border-radius: .16rem;
    &__icon{
      text-align: center;
      width: .44rem;
      icon
    }
    &__input{

    }
  }
}
</style>
