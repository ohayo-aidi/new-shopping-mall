<template>
  <div class="content">
    <div class="category">
      <div class="category__item category__item--active">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
      <div class="category__item">全部商品</div>
    </div>
    <div class="product">
      <div class="product__item">
        <img
          class="product__item__img"
          src="http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="product__item__detail">
          <h4 class="product__item__title">番茄250g/份</h4>
          <p class="product__item__sales">月售10件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;33.6</span>
            <span class="product__item__origin">&yen;66.6</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Content",
};
</script>
<style lang="scss" scoped>
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
    display: flex;
    // padding: 0.12rem 0;
    margin: .12rem  .16rem;
    border-bottom: 0.01rem, solid #f1f1f1;
    &__img {
        text-align: center;
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
  }
}
</style>
