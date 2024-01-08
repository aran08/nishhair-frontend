import { cartApi } from "../../mooks/cart";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};
const slice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    getAllProduct(state, action){
      if(action.payload){
        state.cartData = action.payload.data
      }
    },
  },
});

export const { reducer } = slice;

  export const createData = (data) => async () => {
    try {
      const result = await cartApi.createData(data);
      if (result) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const getcartData = () => async () => {
    try {
      const result = await cartApi.getcartData();
      if(result){
        return result?.data;
      }
    } catch (error) {
        console.log(error);
    }
};

export const deletecartData = (id) => async (dispatch) => {
  try {
    const result = await cartApi.deletecartData(id);
    if(result){
      await dispatch(slice.actions.deletecartData(result))
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = (data) => async (dispatch) => {
  try {
    const result = await cartApi.updateCart(data);
    console.log(result);
    if(result){
      await dispatch(slice.actions.updateCart(result))
      return true;
    }
    return false;
  } catch (error) {
    console.log(error)
  }
};