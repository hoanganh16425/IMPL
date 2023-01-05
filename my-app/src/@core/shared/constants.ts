import { MenuSection } from "./interface";

export const  menuSections: MenuSection[] = [
    {
      name: "HRM",
      items: [
        {
          route: "dashboard",
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