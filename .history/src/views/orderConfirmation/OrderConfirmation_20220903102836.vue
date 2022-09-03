<template>
  <div class="wrapper">
    <div class="top">
      <div class="top__header">
        <div class="iconfont top__header__back">&#xe697;</div>
        确认订单
      </div>
      <div class="top__receiver">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__address">深圳大学生活区东区2栋</div>
        <div class="top__receiver__info">
          <span class="top__receiver__info__name">林先生</span>
          <span class="top__receiver__info__phone">110</span>
        </div>
        <div class="inconfont top__receiver__icon">&#xe697;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderConfirmation",
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
}
.top{
    &__header{
        &__back{

        }
    }
    
}
</style>
