import { Department, PassType, UserType, WorkingDay } from "../share/enum";
import { ISelectType } from "../share/interface";
import { MenuSection } from "./interface";

export const menuSections: MenuSection[] = [
  {
    name: "HRM",
    items: [
      {
        route: "users/list",
        name: "User",
        icon: "icon-user",
        isDisplay: true
      },
      {
        route: "/",
        name: "Attendance",
        icon: "icon-calendar",
        isDisplay: true
      },
      {
        route: "/",
        name: "Leave",
        icon: "icon-leave",
        isDisplay: true
      }
    ],
    isDisplay: true
  },
  {
    name: "CRM",
    items: [
      {
        route: "/",
        name: "Customer",
        icon: "icon-user-group",
        isDisplay: true
      },
      {
        route: "/",
        name: "Quotation",
        icon: "icon-quote",
        isDisplay: true
      },
      {
        route: "/",
        name: "Booking",
        icon: "icon-suitcase-2",
        isDisplay: true
      },
      {
        route: "/",
        name: "Invoice",
        icon: "icon-invoice",
        isDisplay: true
      }
    ],
    isDisplay: true
  },
  {
    name: "OPS",
    items: [
      {
        route: "/",
        name: "Voyage",
        icon: "icon-suitcase",
        isDisplay: true
      },
      {
        route: "/",
        name: "Crew",
        icon: "icon-crew",
        isDisplay: true
      },
      {
        route: "/",
        name: "Operation",
        icon: "icon-gear",
        isDisplay: true
      },
      {
        route: "/",
        name: "Haulage",
        icon: "icon-suitcase-2",
        isDisplay: true
      },
      {
        route: "/",
        name: "Purchase Order",
        icon: "icon-purchase",
        isDisplay: true
      }
    ],
    isDisplay: true
  },
  {
    name: "ASSET",
    items: [
      {
        route: "/",
        name: "Vehicle",
        icon: "icon-truck",
        isDisplay: true
      },
      {
        route: "/",
        name: "Fleet",
        icon: "icon-car-group",
        isDisplay: true
      },
      {
        route: "/",
        name: "Container",
        icon: "icon-container",
        isDisplay: true
      }
    ],
    isDisplay: true
  },
  {
    name: "ANALYTICS",
    items: [],
    isDisplay: true
  }
];

export const USERTYPE_DISPLAY: string[] = [
  "superadmin",
  "hr",
  "manager",
  "sale",
  "cs",
  "account",
  "traffic controller",
  "driver",
  "op admin",
  "port op",
  "permit",
  "crew"
];

export const USER_TYPE_COLOR: string[] = [
  "green",
  "blue",
  "red",
  "purple",
  "orange",
  "mint",
  "pink",
  "sky",
  "violet",
  "carrot",
  "black",
  "teal"
];

export const USERTYPE: ISelectType[] = [
  { value: UserType.SUPERADMIN, label: 'Super Admin', disabled: false },
  { value: UserType.HR, label: 'HR', disabled: false },
  { value: UserType.MANAGER, label: 'Manager', disabled: false },
  { value: UserType.SALE, label: 'Sale', disabled: false },
  { value: UserType.CS, label: 'Cs', disabled: false },
  { value: UserType.ACCOUNT, label: 'Acount', disabled: false },
  { value: UserType.TRAFFIC_CONTROLLER, label: 'Traffic conntroller', disabled: false },
  { value: UserType.DRIVER, label: 'Driver', disabled: false },
  { value: UserType.OP_ADMIN, label: 'OP Admin', disabled: false },
  { value: UserType.PORT_OP, label: 'Portop', disabled: false },
  { value: UserType.PERMIT, label: 'Permit', disabled: false },
  { value: UserType.CREW, label: 'Crew', disabled: false },
];

export const DEPARTMENT: ISelectType[] = [
	{ value: Department.SUPPORT, label: 'Support' },
	{ value: Department.OPERATION, label: 'Operation' },
	{ value: Department.TRANSPORT, label: 'Transport' },
	{ value: Department.CS, label: 'CS' },
	{ value: Department.FINANCE, label: 'Finance' },
	{ value: Department.CREW, label: 'Crew' },
];

export const WORKINGDAY: ISelectType[] = [
	{ value: WorkingDay.MONDAY, label: 'Monday' },
	{ value: WorkingDay.TUESDAY, label: 'Tuesday' },
	{ value: WorkingDay.WEDNESDAY, label: 'Wednesday' },
	{ value: WorkingDay.THURSDAY, label: 'Thursday' },
	{ value: WorkingDay.FRIDAY, label: 'Friday' },
	{ value: WorkingDay.SATURDAY, label: 'Saturday' },
	{ value: WorkingDay.SUNDAY, label: 'Sunday' },
];

export const WORKPASS: ISelectType[] = [
	{ value: PassType.EPASS, label: 'E-Pass' },
	{ value: PassType.WPASS, label: 'W-Pass' },
	{ value: PassType.SPASS, label: 'S-Pass' },
	{ value: PassType.SGNRIC, label: 'SG NRIC' },
	{ value: PassType.KTP, label: 'KTP' },
	{ value: PassType.MSIANRIC, label: 'MSIA NRIC' },
];