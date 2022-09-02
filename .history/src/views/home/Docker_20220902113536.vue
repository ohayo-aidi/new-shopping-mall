<template>
  <div class="docker">
    <div
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
      v-for="(item, index) in dockerList"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"></div>
        <div class="title">{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe617;', title: 'home', to: { name: 'Home' } },
      { icon: '&#xe604;', title: 'cart', to: { name: 'CartList' } },
      { icon: '&#xe62a;', title: 'order', to: { name: 'Home' } },
      { icon: '&#xe78b;', title: 'my', to: { name: 'Home' } }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import "@/style/variables.scss";
.docker {
  display: flex;
  position: absolute;
  padding: 0 0.18rem 0 0.18rem; //顺时针 上 右 下 左
  box-sizing: border-box;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  border-top: 0.01rem solid white;
  &__item {
    flex: 1; //均分等分
    text-align: center;
    a
    .iconfont {
      margin: 0.04rem 0 0.01rem 0;
      font-size: 0.25rem;
    }
    .title {
      font-size: 0.1rem;
    }
    &--active {
      color: aqua;
    }
  }
  color: $content-fontcolor;
}
</style>
