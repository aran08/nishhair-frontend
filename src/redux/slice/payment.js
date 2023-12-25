import { createSlice } from "@reduxjs/toolkit";
import { paymentApi } from "../../mooks/payment";

const slice = createSlice({
    name: "payment",
    reducers: {
      getAllProduct(state, action){
        console.log("action payload",action.payload)
        if(action.payload){
          state.products = action.payload.data
        }
      },
    },
  });