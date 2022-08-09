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
            <div class="product__item__img"></div>
            <div></div>
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
</style>
