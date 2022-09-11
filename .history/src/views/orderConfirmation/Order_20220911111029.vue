<template>
  <div class="order">
    <div class="order__price">
      实付金额 <b>¥{{ calculations.price }}</b>
    </div>
    <div class="order__btn">提交订单</div>
  </div>
  <div class="mask">
    <div class="mask__content">
      <h3 class="mask__content__title">确认要离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="handleCancelOrder"
        >
          取消订单
        </div>
        <div
          class="mask__content__btn mask__content__btn--last"
          @click="handleConfirmOrder"
        >
          确认支付
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useCommonCartEffect } from "@/effects/commonCartEffect";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "Order",
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { calculations } = useCommonCartEffect(shopId);
    const handleCancelOrder = () => {
      alert("cancel");
    };
    const handleConfirmOrder = () => {
      alert("confirm");
    };
    return { calculations, handleCancelOrder, handleConfirmOrder };
  },
};
</script>
<style lang=""></style>
