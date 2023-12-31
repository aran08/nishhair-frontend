import axios from "axios";

class CartApi {

 async createData(data) {
    console.log("cart mocks data",data)
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/userapp/cart/create`,
        data,
        {
            method:"post",
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        if(response){
            return response?.data;
        }
    } catch (error) {
        console.log(error);
    }
 }

 async getcartData() {
    try {
        let data ={
            "query":{},
            "options": {
              "collation": "",
              "sort": {"name":1},
              "populate": "products.productId",
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": 1,
              "limit": 9,
              "pagination": true,
              "useEstimatedCount": false,
              "useCustomCountFn": false,
              "forceCountFn": false,
              "read": {},
              "options": {}
            },
            "isCountOnly": false
          }
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/userapp/cart/list`,
          data,
          {
              method:"post",
              headers: {
                  "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
              }
          });
        return response;
    } catch (error) {
        console.log(error);
    }
 }

}

export const cartApi = new CartApi();