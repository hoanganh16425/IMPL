import { AxiosResponse } from "axios";
import axiosInstance from "../interceptor/addToken";
import { useNavigate } from "react-router-dom";

const url = "api/Auth";
export const login = (username: string, password: string): Promise<AxiosResponse> => {
  return axiosInstance
    .post(url, {
      username,
      password,
    })
    .then((response: AxiosResponse) => {
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      // axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
      return response;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
