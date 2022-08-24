import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    cartList: {//一开始购物车是没有内容的 以下内容仅是为了展示层级解构
      // // 第一层级是商铺的id(不同的商铺添加到购物车)
      // shopId: {
      //   // 第二层是商品id(同一店铺下 不同的商品)
      //   // 第二层内容是商品内容以及购物数量
      //   productId: {
      //     _id: '1',
      //     name: '番茄250g/份',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2,
      //     check: true
      //   },
      // },
    }
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload;
      let shopInfo = state.cartList[shopId]
      if(!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if(!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + payload.num
      if(payload.num > 0) { product.check = true }
      if(product.count < 0) { product.count = 0 }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked(state, payload){
      const {shopId, productId} = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
    },
    clearCartProducts(state, payload){
      const {shopId} = payload
      state.cartList[shopId] = {}
    },
    setCartItemsChecked(state, payload){
      const 
    }
  },
  actions: {
  },
  modules: {
  }
})