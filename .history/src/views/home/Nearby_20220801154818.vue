<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="item in nearbyList" :key="item.id">
      <img class="nearby__item__img" :src="item.imgUrl" />

      <div class="nearby__item__content">
        <div class="nearby__item__content__title">{{ item.title }}</div>
        <div class="nearby__item__content__tags">
          <span
            class="nearby__item__content__tag"
            v-for="(tag, index) in item.tags"
            :key="index"
            >{{ tag }}</span
          >
        </div>
        <span class="nearby__item__content__highlight">
          {{ item.desc }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { get } from "@/utils/request";

const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    const result = await get("/api/shop/hot-list");
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data;
    }
  };
  return { nearbyList, getNearbyList };
};
export default {
  name: "Nearby",
  setup() {
    
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/variables.scss";
.nearby {
  &__title {
    font-size: 0.18rem;
    margin: 0.16rem 0 0.02rem 0;
    font-weight: normal; //是否加粗字体
    color: $content-fontcolor;
  }
  &__item {
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
}
</style>
