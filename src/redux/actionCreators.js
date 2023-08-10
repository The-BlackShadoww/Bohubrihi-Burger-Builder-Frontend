import * as actionTypes from "./actionTypes";
import axios from "axios";
//!------------------------------------------------

export const addIngredient = (ingType) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: ingType,
    };
};

export const removeIngredient = (ingType) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: ingType,
    };
};

export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE,
    };
};

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS,
    };
};

export const loadOrders = (orders) => {
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders,
    };
};

export const orderLoadFailed = () => {
    return {
        type: actionTypes.LOAD_ORDERS,
    };
};

export const fetchOrders = (token, userId) => (dispatch) => {
    const queryParams = '&orderBy="userId"&equalTo="' + userId + '"';
    axios
        .get(
            //! This link has to be written in a single quotation '' according to the rules of firebase.
            'https://burger-builder-app-bbcb4-default-rtdb.firebaseio.com/orders.json?auth=' +
                token +
                queryParams
        )
        .then((response) => {
            dispatch(loadOrders(response.data));
        })
        .catch((err) => {
            dispatch(orderLoadFailed());
        });
};
