export enum SORT_TYPE {
    CREATED_DATE_DESC = 'CREATED_DATE_DESC',
    CREATED_DATE = 'CREATED_DATE'
}

export enum Department {
    SUPPORT,
    OPERATION,
    TRANSPORT,
    CS,
    FINANCE,
    CREW,
}

export enum PassType {
    EPASS,
    WPASS,
    SPASS,
    SGNRIC,
    MSIANRIC,
    KTP,
}

export enum WorkingDay {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
}

export enum UserType {
    SUPERADMIN,
    HR,
    MANAGER,
    SALE,
    CS,
    ACCOUNT,
    TRAFFIC_CONTROLLER,
    DRIVER,
    OP_ADMIN,
    PORT_OP,
    PERMIT,
    CREW
}