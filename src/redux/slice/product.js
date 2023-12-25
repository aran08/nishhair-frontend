import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../mooks/product";

const initialState = {
    products: [],
  };
const slice = createSlice({
    name: "product",
    initialState,
    reducers: {
      getAllProduct(state, action){
        console.log("action payload",action.payload)
        if(action.payload){
          state.products = action.payload.data
        }
      },
    },
  });

export const { reducer } = slice;

export const getAllProduct = () => async (dispatch) => {
    try {
      const result = await productApi.getAllProduct();
      console.log("result",result)
      if(result){
        const res = await dispatch(slice.actions.getAllProduct(result.data));
        return res;
      }
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = (id) => async(dispatch) => {
     try {
        const result = await productApi.getProduct(id);
        console.log("gettingproduct by id",result);
      if(result){
        return result.data;
      }
     } catch (error) {
        console.log(error);
     }
}