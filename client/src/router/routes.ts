import CreateDevice from '../components/adminComponents/createDevice/CreateDevice';
import DashboardAdmin from '../components/adminComponents/dashboard/DashboardAdmin';
import Auth from '../pages/auth/Auth';
import Basket from '../pages/basket/Basket';
import DevicePage from '../pages/devicePage/DevicePage';
import Shop from '../pages/shop/Shop';
import { AdminRoutes, Routes} from  './consts';

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
        path: AdminRoutes.DASHBOARD,
        Component: DashboardAdmin,
    },
    {
        path: AdminRoutes.CREATE_DEVICE,
        Component: CreateDevice,
    },
]

interface RoutesItem {
    path: string;
    Component: any;
}
