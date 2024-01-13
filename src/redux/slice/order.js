import { createSlice } from "@reduxjs/toolkit";
import { orderApi } from "../../mooks/order";

const initialState = {
    orderData: [],
  };

const slice = createSlice({
    name: "orderData",
    initialState,
    reducers: {
      getAllOrderData(state, action){
        if(action.payload){
          state.orderData = action.payload.data
        }
      },
    },
  });

  export const { reducer } = slice;

  export const createOrder = (data) => async () => {
    try {
      const result = await orderApi.createOrder(data);
      if (result) {
        return result;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const getorderData = () => async () => {
    try {
      const result = await orderApi.getOrder();
      if(result){
        return result?.data;
      }
    } catch (error) {
        console.log(error);
    }
};