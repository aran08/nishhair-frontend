import axios from "axios";

class AuthApi {
  register(data) {
    try {
      const response = axios.post(
        `${process.env.REACT_APP_BASE_URL}/userapp/auth/register`,
        data
      );
      console.log(response);
      if (response) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async login(data) {
    try {
       
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/userapp/auth/login`,
        data
      );
       
      if (response) {
        
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getUser(){
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/userapp/user/me`,{
            method:"get",
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        console.log("mocks ",response)
        if(response.data.status==='SUCCESS')
        return response.data;
        else 
          return false;
    } catch (error) {
        console.log("error inside mocks",error)
    }
  }
}

export const authApi = new AuthApi();