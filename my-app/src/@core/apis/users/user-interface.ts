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

export interface GroupSelect {
  value: string;
  label: string;
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

export interface UserGeneralInfo {
  name: string;
  userName: string;
  roles: number[];
  password: string;
  email?: string;
  phoneNumber: string;
  dateJoined: string;
  postalCode?: string;
  addressOne: string;
  addressTwo?: string;
}

export interface ParticularModel {
  nricfin: string;
  citizenshipId: number;
  dateOfBirth: string;
  workPass: number;
  workPassExpiry?: string;
  emergencyContactNo: string;
  relationship: string;
  companyId: string;
  groupIds: string[];
}

export interface ContractModel {
  employmentTerm: number;
  dateLeft?: string;
  bankName?: string;
  accountNo?: string;
  basic: string;
  allowance: string;
}

export interface LeavesModel {
  annualLeave: number;
  medicalLeave: number;
  urgentLeave: number;
  nsReservist: number;
  compassionateLeave: number;
  hospitalisation: number;
  marriage: number;
  maternity: number;
  paternity: number;
  unpaid: number;
  childcare: number;
  offInLieu?: number;
}

export interface PermitModel {
  jpPass?: string;
  jpPassExpiryDate?: string;
  psaPass?: string;
  psaPassExpiryDate?: string;
  hazmat?: string;
  hazmatExpiryDate?: string;
  driverLicense?: string
}

export interface WorkingDetailModel {
  jobTitle: string;
  department: 0;
  locationIds: string[];
  workingDay: number[];
  shiftStarts: string;
  shiftEnds: string;
  wfh?: boolean;
  ot?: boolean;
  mealbreak: boolean;
  supervisorId: string;
}

export interface CreateUserRequest {
  userGeneralInfo: UserGeneralInfo;
  particularModel: ParticularModel;
  contractModel: ContractModel;
  leaveModel: LeavesModel;
  permitModel: PermitModel;
  workingDetailModel: WorkingDetailModel;
}