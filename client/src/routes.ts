import AdminPage from './pages/admin/AdminPage';
import Auth from './pages/auth/Auth';
import Basket from './pages/basket/Basket';
import DevicePage from './pages/devicePage/DevicePage';
import Shop from './pages/shop/Shop';
import { Routes } from './utils/consts';

export const authRoutes: RoutesItem[] = [
    {
        path: Routes.BASKET_ROUTE,
        Component: Basket,
    },
];

export const publicRoutes: RoutesItem[] = [
    {
        path: Routes.SHOP_ROUTE,
        Component: Shop,        
    },
    {
        path: Routes.LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: Routes.REGISTRATION_ROUTE,
        Component: Auth,        
    },
    {
        path: Routes.DEVICE_ROUTE + '/:id',
        Component: DevicePage,        
    },
];

export const adminRoutes: RoutesItem[] = [
    {
        path: Routes.ADMIN_ROUTE,
        Component: AdminPage,
    },
]

interface RoutesItem {
    path: string;
    Component: any;
}
