import axios from "axios";

class OrderApi {

  async createOrder () {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/userapp/order/create`,
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
        
    }
  };

  async getOrder(page=1,limit=2,filters={}) {
    filters.isDeleted=false;
    let data ={
        "query":filters,
        "options": {
          "collation": "",
          "sort": {},
          "populate": "products.productId",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": page,
          "limit": limit,
          "pagination": false,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false
      }
    try {
        
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
};

export const OrderApi = new OrderApi();