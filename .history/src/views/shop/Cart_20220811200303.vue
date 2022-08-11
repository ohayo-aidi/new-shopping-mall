<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          lass="check__icon__img"
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
        />
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;127</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
};
</script>
<style lang="scss" scoped>
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check{
  display: flex;
  height: .49rem;
  border-top: .01rem solid #F1F1F1;
  line-height: .49rem;
  &__icon{
    
  }
}
</style>
