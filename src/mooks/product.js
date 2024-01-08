import axios from "axios";

class ProductApi {
    async getAllProduct() {
        try {
            let data ={
                "query":{},
                "options": {
                  "collation": "",
                  "sort": {"name":1},
                  "populate": "",
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
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/userapp/product/list`,
                data, 
              );
              if (response) {
                return response.data;
              }
        } catch (error) {
            console.log(error);
        }
    }

    async getProduct(id) {
        try {

            let data ={
                "query":{},
                "options": {
                  "collation": "",
                  "sort": {"name":1},
                  "populate": "",
                  "projection": "",
                  "lean": false,
                  "leanWithId": true,
                  "page": 1,
                  "limit": 1,
                  "pagination": true,
                  "useEstimatedCount": false,
                  "useCustomCountFn": false,
                  "forceCountFn": false,
                  "read": {},
                  "options": {}
                },
                "isCountOnly": false
              }

            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/userapp/product/get/${id}`,
                data,
              );
              if (response) {
                return response.data;
              }
        } catch (error) {
            console.log(error);
        }
    }
}

export const productApi = new ProductApi();