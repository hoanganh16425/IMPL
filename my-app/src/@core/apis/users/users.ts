import axiosInstance from "../../interceptor/addToken";
import { UserData } from "./user-interface";
const url = "api/Account";

export const getProfile = (): Promise<UserData> => {
  return axiosInstance
    .get(`${url}/GetByToken`)
    .then((response) => {      
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
