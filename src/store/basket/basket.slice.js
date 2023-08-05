import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  entities: [],
  basketCount: 0,
  totalPrice: 0,
};

export const toolsSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    basketAdded(state, action) {
      state.entities.push(action.payload);
      state.basketCount = state.entities.length;
    },
    basketAbdated(state, action, dispatch) {
      const currentTool = state.entities.find(
        (item) => item._id === action.payload.id
      );
      currentTool.count = action.payload.count;
    },
    itemDeleted(state, action) {
      state.entities = state.entities.filter(
        (item) => item._id !== action.payload
      );
      state.basketCount = state.entities.length;
    },
    totalPriceAbdated(state, action) {
      state.totalPrice = state.entities.reduce((sum, cur) => {
        return sum + parseInt(cur.price.replace(/\s/g, "")) * cur.count;
      }, 0);
    },
  },
});

const { reducer: basketReducer, actions } = toolsSlice;
const { basketAdded, itemDeleted, basketAbdated, totalPriceAbdated } = actions;

export const addTobasket = (tools) => (dispatch, getState) => {
  dispatch(basketAdded(tools));
  dispatch(totalPriceAbdated());
};

export const getBasket = () => (state) => {
  return state.basket.entities;
};

export const getBasketCount = () => (state) => {
  return state.basket.basketCount;
};

export const getTotalPrice = () => (state) => {
  return state.basket.totalPrice;
};

export const deleteItem = (id) => (dispatch, getState) => {
  dispatch(itemDeleted(id));
  dispatch(totalPriceAbdated());
};

export const abdateBasket = (id, count) => (dispatch) => {
  dispatch(basketAbdated({ id, count }));
  dispatch(totalPriceAbdated());
};

export default basketReducer;
