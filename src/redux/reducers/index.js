import { actions } from '../actions'

const INITIAL_STATE = {
  shopList: [],
  productDetail: {},
  categories: [],
  cart: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.setShopList:
      return {
        ...state,
        shopList: action.payload
      }

    case actions.setProductDetail:
      return {
        ...state,
        productDetail: action.payload
      }

    case actions.setCategories:
      return {
        ...state,
        categories: action.payload
      }

    case actions.setCart:
      return {
        ...state,
        cart: action.payload
      }

    default:
      return state
  }
}

export default reducer
