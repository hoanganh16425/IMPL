export interface MenuSection {
    name: string;
    items: MenuItem[],
    isDisplay: boolean;
}
export interface MenuItem {
    route: string;
    name: string;
    icon: string;
    isDisplay: boolean;
}