<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl" />

    <div class="shop__content">
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__tag">月售: {{ item.sales }}</span>
        <span class="shop__tag">起送: {{ item.expressLimit }}</span>
        <span class="shop__tag"
          >基础运费: {{ item.expressPrice }}</span
        >
      </div>
      <span class="shop__content__highlight">
        {{ item.slogan }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props
};
</script>
<style lang="scss" scoped>
@import "@/style/variables.scss";
.shop {
  display: flex; //不换行
  padding-top: 0.12rem;
  &__img {
    width: 0.6rem;
    height: 0.6rem;
    padding-right: 0.16rem;
  }
  &__content {
    padding-bottom: 0.12rem;
    border-bottom: 0.01rem solid $content-bgColor;
    //flex: 1;
    &__title {
      font-size: 0.16rem;
      line-height: 0.22rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
      line-height: 0.18rem;
    }
    &__tag {
      padding-right: 0.16rem;
    }
    &__highlight {
      padding: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-highlight;
    }
  }
}
</style>
