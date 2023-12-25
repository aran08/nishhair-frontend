import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../mooks/auth";

const initialState = {
  user: {},
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser(state, action){
      console.log("Action Payload",action.payload)
      if(action.payload){
        state.user = action.payload
      }
    },
  },
});

export const { reducer } = slice;

export const getUser = () => async (dispatch) => {
    try {
      const result = await authApi.getUser();
      if(result){
        const res = await dispatch(slice.actions.getUser(result.data));
        return res;
      }
    } catch (error) {
        console.log(error);
    }
};

export const register = (data) => async (dispatch) => {
  try {
    const result = await authApi.register(data);

    if (result) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const info = (data) => async (dispatch) => {
  try {
    const result = await info(data);
    if (result) {
      console.log(result);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = (data) => async (dispatch) => {
    try {
    const result = await authApi.login(data);

    if (result) {
      localStorage.setItem(
        "accessToken",
        result && result.data && result.data.token
      );
      return true;
    } else {
      return false;
    }

    } catch (error) 
    {
      console.log(error);
    }
};

export const logout = () => async (dispatch) => {
  try {

      localStorage.removeItem(
        "accessToken",
      );

      return true;

  } catch (error) 
  {
    console.log(error);
  }
};