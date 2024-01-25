import axios from "axios";

class PaymentApi {
    // async getPayment () {
    //     try {
    //         const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/userapp/order/create`,
    //         {
    //         method:"get",
    //         headers: {
    //             "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
    //         }
    //         });
    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async createPayment (data) {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/userapp/payment/create`,data,
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

    // async updatePayment () {
    //     try {
    //         const response = await axios.put(
    //             `${process.env.REACT_APP_BASE_URL}/userapp/payment/update`,
    //             {
    //                 method:"post",
    //                 headers: {
    //                     "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
    //                 }
    //             });
    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

export const paymentApi = new PaymentApi();