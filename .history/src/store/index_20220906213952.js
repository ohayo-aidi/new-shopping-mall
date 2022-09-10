import Vuex from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  if (typeof localStorage.cartList !== 'undefined') { //避免直接
    const JSONCartList = JSON.parse(localStorage.cartList)
    return JSONCartList
  }
  return {}
}

export default Vuex.createStore({
  state: {
    // { shopId: {shopName: '' , productList: { productId: {} } }}
    cartList: getLocalCartList()
    // 一开始购物车是没有内容的 以下内容仅是为了展示层级解构
    // // 第一层级是商铺的id(不同的商铺添加到购物车)
    // shopId: {
    //   // 第二层是商品id(同一店铺下 不同的商品)
    //   // 第二层内容是商品内容以及购物数量
    //   shopName: '',
    //   productList: {
    //    productId: {
    //     _id: '1',
    //     name: '番茄250g/份',
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //     sales: 10,
    //     price: 33.6,
    //     oldPrice: 39.6,
    //     count: 2,//后端返回时是没有的 前端加上
    //     check: true
    //    },
    //   }
    // },
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + payload.num
      if (payload.num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    clearCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    setCartItemsChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (const i in products) {
          const product = products[i]
          product.check = true
        }
      }
      setLocalCartList(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.name = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    }
  },
  actions: {},
  modules: {}
})
