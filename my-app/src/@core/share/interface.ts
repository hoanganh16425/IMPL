import { SORT_TYPE } from "./enum";

export interface LoginResponse {
  changePasswordToken?: string;
  fullName?: string;
  userName?: string;
  access_token?: string;
  token_type?: string;
  expires_in?: number;
}

export interface ListBaseResponse<T> {
  page: number;
  amount: number;
  totalCount: number;
  totalPage: number;
  sort?: string;
  searchText?: string;
  data: T[];
}

export interface ListQueryParams {
  page?: number;
  amount?: number;
  sort?: SORT_TYPE;
  searchText?: string;
}

export type RequestQueryFn = (queries?: object) => string;

export interface ISourceAndTargetKey {
  [key: string]: any;
}