<template>
  <div class="position">
    <span class="iconfont icon-tubiaozhizuomoban-"></span>
    深圳大学生活区东区2栋
    <span class="iconfont icon-bell"></span>
  </div>
  <!--search层和banner层-->
  <div class="search">
    <span class="iconfont icon-search"></span>
    <span class="search__text">随意输入商店名称</span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="https://wx3.sinaimg.cn/mw690/008g6XFMgy1h06124hs8pj319q0u00xm.jpg"
    />
  </div>
  <!--icons层与gap层-->
  <div class="icons">
    <div class="icons__item" v-for="item in iconList" :key="item.desc">
      <img
        class="icons__item__img"
        :src='`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`'
      />
      <p class="icons__item__desc">{{item.desc}}</p>
    </div>
  </div>

  <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘培蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconList }
  }
}
</script>
<style lang="scss" scoped>
@import "@/style/mixins.scss";
@import "@/style/variables.scss";
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  color: $content-fontcolor;
  .icon-tubiaozhizuomoban- {
    position: relative;
    top: 0.04rem;
    font-size: 0.3rem;
  }
  .icon-bell {
    position: absolute;
    right: 0;
    top: 0.23rem;
    font-size: larger;
  }
}
.search {
  background: $content-bgColor;
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  border-radius: 0.16rem;
  color: $content-search-mainColor;
  .icon-search {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.16rem;
  }
  &__text {
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 30%; //图片宽度除以高度
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      color: $content-fontcolor;
    }
  }
}
.gap {
  height: 0.1rem;
  background: $content-bgColor;
  margin: 0 -0.18rem;
}
</style>
