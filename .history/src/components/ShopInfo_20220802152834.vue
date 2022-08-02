<template>
  <div class="nearby__item" v-for="item in nearbyList" :key="item._id">
    <img class="nearby__item__img" :src="item.imgUrl" />

    <div class="nearby__item__content">
      <div class="nearby__item__content__title">{{ item.name }}</div>
      <div class="nearby__item__content__tags">
        <span class="nearby__content__tag">月售: {{ item.sales }}</span>
        <span class="nearby__content__tag">起送: {{ item.expressLimit }}</span>
        <span class="nearby__content__tag"
          >基础运费: {{ item.expressPrice }}</span
        >
      </div>
      <span class="nearby__item__content__highlight">
        {{ item.slogan }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
    name: "ShopInfo"
};
</script>
<style lang="scss" scoped></style>
