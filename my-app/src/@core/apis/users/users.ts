import { AxiosResponse } from "axios";
import axiosInstance from "../../interceptor/addToken";
import { ListBaseResponse } from "../../share/interface";
import { GetAllUsersQuery, User, UserData } from "./user-interface";
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

export const getUserList = (groupId: string, query?: GetAllUsersQuery): Promise<ListBaseResponse<User>> => {
  return axiosInstance
    .get(`${url}/GetAllUser/${groupId}`, { params : query })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};


