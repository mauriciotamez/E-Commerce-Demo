import axios from 'axios'
import { getConfig } from '../../utils'

export const actions = {
  setShopList: 'SET_SHOP_LIST',
  setProductDetail: 'SET_PRODUCT_DETAIL',
  setCategories: 'SET_CATEGORIES',
  setCart: 'SET_CART'
}

export const setProductDetail = product => ({
  type: actions.setProductDetail,
  payload: product
})

export const setShopList = product => ({
  type: actions.setShopList,
  payload: product
})

export const setCategories = category => ({
  type: actions.setCategories,
  payload: category
})

export const setCart = cart => ({
  type: actions.setCart,
  payload: cart
})

export const getShopListThunk = () => {
  return dispatch => {
    axios.get('https://ecommerce-exercise-backend.herokuapp.com/products/', getConfig())
      .then(res => dispatch(setShopList(res.data)))
      .catch(error => console.log(error.response))
  }
}

export const getProductDetailThunk = id => {
  return dispatch => {
    axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
      .then(res => dispatch(setProductDetail(res.data)))
      .catch(error => console.log(error.response))
  }
}

export const getCategoriesThunk = () => {
  return dispatch => {
    axios.get('https://ecommerce-exercise-backend.herokuapp.com/categories/', getConfig())
      .then(res => dispatch(setCategories(res.data)))
      .catch(error => console.log(error.response))
  }
}

export const filterCategoryThunk = id => {
  return dispatch => {
    axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
      .then(res => dispatch(setShopList(res.data)))
      .catch(error => console.log(error.response))
  }
}

export const filterProductThunk = product => {
  return dispatch => {
    axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${product}`, getConfig())
      .then(res => dispatch(setShopList(res.data)))
      .catch(error => console.log(error.response))
  }
}

export const getCartThunk = () => {
  return dispatch => {
    axios.get('https://ecommerce-exercise-backend.herokuapp.com/cart/', getConfig())
      .then(res => dispatch(setCart(res.data)))
      .catch(error => console.log(error.response))
  }
}

export const addProductThunk = product => {
  return dispatch => {
    axios.post('https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/', product, getConfig())
      .then(() => {
        dispatch(getCartThunk())
        alert('Product added to your cart')
      })
      .catch(error => console.log(error.response))
  }
}

export const editProductQuantityThunk = (id, product) => {
  return dispatch => {
    axios.put(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/change_quantity/`, product, getConfig())
      .then(() => dispatch(getCartThunk()))
      .catch(error => console.log(error.response))
  }
}

export const deleteProductFromCartThunk = id => {
  return dispatch => {
    axios.delete(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`, getConfig())
      .then(() => dispatch(getCartThunk()))
      .catch(error => console.log(error.response))
  }
}

export const buyCartThunk = cart => {
  return dispatch => {
    axios.post(`https://ecommerce-exercise-backend.herokuapp.com/cart/buy/`, cart, getConfig())
      .then(() => {
        dispatch(getCartThunk())
        alert("Success")
      })
      .catch(error => console.log(error.response))
  }
}