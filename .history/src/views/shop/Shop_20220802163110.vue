<template>
    <div class="wrapper">
        <ShopInfo :item="item"/>
    </div>
</template>
<script>
import ShopInfo from '@/components/ShopInfo.vue';
export default {
    name: "Shop",
    components: { ShopInfo },
    
}
</script>
<style lang="scss" scoped>
    
</style>