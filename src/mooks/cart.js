import axios from "axios";

class CartApi {

 async createData(data) {
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

 async getcartData(page=1,limit=2,filters={}) {
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

 async deletecartData(id) {
  
        const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/userapp/cart/soft-delete/${id}`,
        {
            method:"delete",
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        console.log("response inside mocks",response)
        if(response.data.status==='SUCCESS')
            return response.data;
        else    
            return false;
 
 }
}

export const cartApi = new CartApi();