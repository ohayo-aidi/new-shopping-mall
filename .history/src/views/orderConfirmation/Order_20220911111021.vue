<template>
  <div class="order">
    <div class="order__price">
      实付金额<b>￥{{ calculations.price }}</b>
    </div>
    <div class="order__btn">提交订单</div>
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