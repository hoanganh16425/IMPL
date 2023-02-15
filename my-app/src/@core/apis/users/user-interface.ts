import { ListQueryParams } from "../../share/interface";

export interface userResponse {}

export interface Location {
  id: string;
  name: string;
  longitude: string;
  latitude: string;
  rangeRadius: number;
}

export interface Group {
  id: string;
  code: string;
  name: string;
  address: string;
  country: string;
  logo: string;
}

export interface GroupData {
  value: string;
  label: string;
  name: string;
  address: string;
  country: string;
  logo: string;
}

export interface Company {
  id: string;
  code: string;
  name: string;
  address: string;
  country: string;
  logo: string;
}

export interface UserInfo {
  id: string;
  avatar: string;
  locations: Location[];
  name: string;
  userName: string;
  roles: number[];
  email: string;
  phoneNumber: string;
  dateJoined: string;
  postalCode: string;
  addressOne: string;
  addressTwo: string;
}

export interface UserData {
  userInfo: UserInfo;
  groups: Group[];
  companies: Company[];
}

export interface User {
  id: string;
  fullName?: string;
  userName?: string;
  roles?: number[];
  department: number;
  location?: string[];
  supervisor?: string;
  email?: string;
  mobileNo?: string;
  workPass: number;
  workingDay?: number[];
  shiftStarts: string;
  shiftEnds: string;
}

export interface GetAllUsersQuery extends ListQueryParams {
  companyId?: string;
  name?: string;
  userName?: string;
  role?: number[];
  department?: number[];
  location?: string[];
  supervisorId?: string;
  email?: string
  mobileNo?: string;
  workPass?: number;
  workingDay?: number[];
  isActive?: boolean;
}
