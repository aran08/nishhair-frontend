// import { createSlice } from "@reduxjs/toolkit";
// import { authApi } from "../../mooks/auth";

// const initialState = {
//     user:{}
// }

// const slice = createSlice({
//     name:"auth",
//     initialState,
//     reducers:{
//         getUser(state,action){

//         }
//     }
// })

// export const { reducer } = slice;

// export const getUser = () => async (dispatch) => {

// }

// export const register = (data) => (dispatch) => {
//     try{
//         const result =  authApi.register(data);

//         if(result){
//             localStorage.setItem("accessToken",result &&  result.data && result.data.token)
//             return true;
//         }
//         else{
//             return false;
//         }

//     }catch(error){
//         console.log(error)
//     }
// }

// export const login = (data) => async(dispatch) => {
//     try{
//         const result = await authApi.login(data);

//         if(result){
//             console.log(result)
//             console.log(result.data.token)
//             localStorage.setItem("accessToken",result &&  result.data && result.data.token)
//             return true;
//         }
//         else{
//             return false;
//         }

//     }catch(error){
//         console.log(error)
//     }
// }