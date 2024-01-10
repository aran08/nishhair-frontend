import { createSlice } from "@reduxjs/toolkit";
import { paymentApi } from "../../mooks/payment";

const slice = createSlice({
  name: "payment",
  reducers: {
    getAllProduct(state, action) {
      if (action.payload) {
        state.products = action.payload.data;
      }
    },
  },
});

export const { reducer } = slice;

// export const createPayment = (data) => async () => {
//   try {
//     const result = await paymentApi.createPayment(data);
//     if (result) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getPayment = () => async () => {
  try {
    const result = await paymentApi.getPayment();
    if (result) {
      return result?.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updatePayment = (data) => async (dispatch) => {
  try {
    const result = await paymentApi.updatePayment(data);
    console.log(result);
    if (result) {
      await dispatch(slice.actions.updatePayment(result));
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};
