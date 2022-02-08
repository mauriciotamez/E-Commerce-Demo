
// 1- Declarar la propiedad en el objeto actions.
// 2- Hacer el case switch
// 3- Crear la funcion en el action generator
// 4- Despachar la funcion en el componente que vayamos a usar

import axios from "axios"
import { getConfig } from "../../utils"

export const actions = {
        setShopList: "SET_SHOP_LIST",
        setProductDetail: "SET_PRODUCT_DETAIL",
        setCategories: "SET_CATEGORIES"
}

export const setProductDetail = product => ({
    type: actions.setProductDetail,
    payload:product 
})

export const setShopList = product => ({
    type: actions.setShopList,
    payload: product
})

export const setCategories = category => ({
    type: actions.setCategories,
    payload: category
})

export const getShopListThunk = () => {
    return dispatch => {
        axios.get("https://ecommerce-exercise-backend.herokuapp.com/products/", getConfig())
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
        axios.get("https://ecommerce-exercise-backend.herokuapp.com/categories/", getConfig())
            .then(res => dispatch(setCategories(res.data)))
            .catch(error => console.log(error.response))
    }
}

export  const filterCategoryThunk = id => {
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