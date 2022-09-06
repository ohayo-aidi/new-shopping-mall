import { useStore } from 'vuex'
import { computed } from 
// 购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }
  const productList = computed( () => {
    const productList = cartList[shopId]?.productList || []
    return productList
  })
  return { changeCartItemInfo, cartList }
}