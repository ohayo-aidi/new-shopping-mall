<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back"></div>
      <div class="search__content">
        <span class="search__content__icon"></span>
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
  margin: .2rem 0 .16rem 0;
  &__back{

  }
  &__content{
    &__icon{

    }
    &__input{

    }
  }
}
</style>
