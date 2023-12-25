import axios from "axios";

class PaymentApi {
    async getPayment () {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/userapp/payment/get`
            );
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createPayment () {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/userapp/payment/create`
            );
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async updatePayment () {
        try {
            const response = await axios.put(
                `${process.env.REACT_APP_BASE_URL}/userapp/payment/updatePayment`
            );
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export const paymentApi = new PaymentApi();